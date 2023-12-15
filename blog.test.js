const request = require('supertest');
const server = require('./app'); 
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcryptjs')

const db = new sqlite3.Database('./db.test.sqlite')
const passwordHash = bcrypt.hashSync('password123', 10)

const postTitle = 'test title';
const postContent = 'test content';
const postHeaderImage = 'test header image';
const postThumbnailImage = 'test thumbnail image';
describe('Blog Posts', () => {
    const userCredentials = {
        username: 'testUser', 
        password: 'password123' // Replace with valid credentials for your application
    };
    let jwt = '';

    describe('setup', () => {
        test('can add user to db', async () => {
            db.run('DELETE FROM users WHERE username = ?', [userCredentials.username])
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

        test('should return 201 with token', async () => {
            const response = await request(server)
                .post('/api/blog/posts')
                .set('Authorization', `Bearer ${jwt}`)
                .send({ title: postTitle, content: postContent, headerImage: postHeaderImage, thumbnailImage: postThumbnailImage });

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
        })
    })

    describe('teardown', () => {
        test('can remove user from db', async () => {
            db.run('DELETE FROM users WHERE username = ?', [userCredentials.username])
            const user = await new Promise((resolve, reject) => {
                db.get('SELECT * FROM users WHERE username = ?', [userCredentials.username], (err, row) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(row)
                })
            })

            expect(user).toBe(undefined)
        })

        test('can remove blog post from db', async () => {
            db.run('DELETE FROM blogPosts WHERE title = ?', [postTitle])
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

        test('can close db', async () => {
            db.close()
        })
    })
});