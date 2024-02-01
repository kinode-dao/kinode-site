const request = require('supertest');
const server = require('./app'); 
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcryptjs')
const moment = require('moment')

const db = new sqlite3.Database('./db.test.sqlite')
const passwordHash = bcrypt.hashSync('password123', 10)

const postTitle = 'test title';
const postContent = 'test content';
const postHeaderImage = 'test header image';
const postThumbnailImage = 'test thumbnail image';
const userCredentials = {
    username: 'testUser', 
    password: 'password123'
};
let jwt = '';

describe('setup', () => {
    test('can add user to db', async () => {
        db.run('INSERT INTO users (username, passwordHash) VALUES (?, ?)', [userCredentials.username, passwordHash])
    })

    test('db should have username and password in it', async () => {
        const user = await new Promise((resolve, reject) => {
            db.get('SELECT * FROM users WHERE username = ?', [userCredentials.username], (err, row) => {
                if (err) {
                    reject(err)
                }
                resolve(row)
            })
        })

        expect(user.username).toBe(userCredentials.username)
        expect(bcrypt.compareSync(userCredentials.password, user.passwordHash)).toBe(true)
    })
})

describe('Blog Posts', () => {
    describe('login', () => {
        test('should return 200 and a token for valid credentials', async () => {
            const response = await request(server)
                .post('/api/blog/login')
                .send(userCredentials);
            
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('token');
            jwt = response.body.token;
        });

        test('should return 401 for invalid credentials', async () => {
            const response = await request(server)
                .post('/api/blog/login')
                .send({ username: 'wrongUser', password: 'wrongPassword' });

            expect(response.statusCode).toBe(401);
        });
    })

    describe('create', () => {
        test('should return 401 without token', async () => {
            const response = await request(server)
                .post('/api/blog/posts')
                .send({ title: postTitle, content: postContent });

            expect(response.statusCode).toBe(401);
        });

        let timeAtPost = +(moment().toDate())
        test('should return 201 with token', async () => {
            const response = await request(server)
                .post('/api/blog/posts')
                .set('Authorization', `Bearer ${jwt}`)
                .send({ title: postTitle, content: postContent, headerImage: postHeaderImage, thumbnailImage: postThumbnailImage, date: timeAtPost });

            expect(response.statusCode).toBe(201);
        });

        test('blog post should be in db', async () => {
            const post = await new Promise((resolve, reject) => {
                db.get('SELECT * FROM blogPosts WHERE title = ?', [postTitle], (err, row) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(row)
                })
            })

            expect(post.title).toBe(postTitle)
            expect(post.content).toBe(postContent)
            expect(post.headerImage).toBe(postHeaderImage)
            expect(post.thumbnailImage).toBe(postThumbnailImage)
            expect(post.date).toBe(timeAtPost)
        })

        test('can get blogpost by slug', async () => {
            const response = await request(server)
                .get('/api/blog/posts/test-title')
                .set('Authorization', `Bearer ${jwt}`)

            expect(response.statusCode).toBe(200);
            expect(response.body.title).toBe(postTitle)
            expect(response.body.content).toBe(postContent)
            expect(response.body.headerImage).toBe(postHeaderImage)
            expect(response.body.thumbnailImage).toBe(postThumbnailImage)
            expect(response.body.slug).toBe('test-title')
        })

        test('can get blogposts', async () => {
            const response = await request(server)
                .get('/api/blog/posts')
                .set('Authorization', `Bearer ${jwt}`)

            expect(response.statusCode).toBe(200);
            expect(response.body.length).toBe(1)
            expect(response.body[0].title).toBe(postTitle)
            expect(response.body[0].content).toBe(postContent)
            expect(response.body[0].headerImage).toBe(postHeaderImage)
            expect(response.body[0].thumbnailImage).toBe(postThumbnailImage)
            expect(response.body[0].slug).toBe('test-title')
            expect(response.body[0].date).toBe(timeAtPost)
        })

        test('can add post with date in the future', async () => {
            const response = await request(server)
                .post('/api/blog/posts')
                .set('Authorization', `Bearer ${jwt}`)
                .send({ title: 'future date', content: 'future content', date: +(moment().add(1, 'day').toDate()) })

            expect(response.statusCode).toBe(201);
        })

        test('future blogposts do not show up in all posts', async () => {
            const response = await request(server)
                .get('/api/blog/posts')
                .set('Authorization', `Bearer ${jwt}`)

            expect(response.statusCode).toBe(200);
            expect(response.body.length).toBe(1)
        })
    })

    describe('edit', () => {
        let timeAtPost = +(moment().toDate())
        test('original post is unedited', async () => {
            const post = await new Promise((resolve, reject) => {
                db.get('SELECT * FROM blogPosts WHERE title = ?', [postTitle], (err, row) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(row)
                })
            })

            expect(post.title).toBe(postTitle)
            expect(post.content).toBe(postContent)
            expect(post.headerImage).toBe(postHeaderImage)
            expect(post.thumbnailImage).toBe(postThumbnailImage)
            expect(post.date).toBeLessThanOrEqual(timeAtPost)
        })

        test('can edit blogpost', async () => {
            const response = await request(server)
                .put('/api/blog/posts/test-title')
                .set('Authorization', `Bearer ${jwt}`)
                .send({ title: 'new title', content: 'new content', headerImage: 'new header image', thumbnailImage: 'new thumbnail image', date: timeAtPost })

            expect(response.statusCode).toBe(201);
        })

        test('blog post should be updated in db', async () => {
            const post = await new Promise((resolve, reject) => {
                db.get('SELECT * FROM blogPosts WHERE title = ?', ['new title'], (err, row) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(row)
                })
            })

            expect(post.title).toBe('new title')
            expect(post.content).toBe('new content')
            expect(post.headerImage).toBe('new header image')
            expect(post.thumbnailImage).toBe('new thumbnail image')
            expect(post.date).toBe(timeAtPost)
        })
    })

    describe('delete', () => {
        test('can delete blogpost', async () => {
            const response = await request(server)
                .delete('/api/blog/posts/test-title')
                .set('Authorization', `Bearer ${jwt}`)

            expect(response.statusCode).toBe(201);
        })

        test('blog post should not be in db', async () => {
            const post = await new Promise((resolve, reject) => {
                db.get('SELECT * FROM blogPosts WHERE title = ?', [postTitle], (err, row) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(row)
                })
            })

            expect(post).toBe(undefined)
        })
    })
});


describe('teardown', () => {
    test('can remove user from db', async () => {
        db.run('DELETE FROM users')
        const user = await new Promise((resolve, reject) => {
            db.get('SELECT * FROM users', (err, row) => {
                if (err) {
                    reject(err)
                }
                resolve(row)
            })
        })

        expect(user).toBe(undefined)
    })

    test('can remove all blog posts from db', async () => {
        db.run('DELETE FROM blogPosts')
        const post = await new Promise((resolve, reject) => {
            db.get('SELECT * FROM blogPosts', (err, row) => {
                if (err) {
                    reject(err)
                }
                resolve(row)
            })
        })

        expect(post).toBe(undefined)
    })

    test('can close db', async () => {
        db.close()
    })
})