const request = require('supertest');
const server = require('./app'); 
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcryptjs')

const db = new sqlite3.Database('./db.test.sqlite')
const passwordHash = bcrypt.hashSync('password123', 10)

describe('JWT Authentication', () => {
    const userCredentials = {
        username: 'testUser', 
        password: 'password123' // Replace with valid credentials for your application
    };

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

    describe('Login Endpoint', () => {
        test('should return 200 and a token for valid credentials', async () => {
            const response = await request(server)
                .post('/api/blog/login')
                .send(userCredentials);
            
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('token');
        });

        test('should return 401 for invalid credentials', async () => {
            const response = await request(server)
                .post('/api/blog/login')
                .send({ username: 'wrongUser', password: 'wrongPassword' });

            expect(response.statusCode).toBe(401);
        });
    });

    describe('Accessing Protected Route', () => {
        let token;

        beforeAll(async () => {
            const response = await request(server)
                .post('/api/blog/login')
                .send(userCredentials);
            
            token = response.body.token;
        });

        test('should allow access to a protected route with valid token', async () => {
            const response = await request(server)
                .get('/protected')
                .set('Authorization', `Bearer ${token}`);
            
            expect(response.statusCode).toBe(200);
        });

        test('should deny access to a protected route with no token', async () => {
            const response = await request(server).get('/protected');
            expect(response.statusCode).toBe(401);
        });
    });

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

        test('can close db', async () => {
            db.close()
        })
    })
});