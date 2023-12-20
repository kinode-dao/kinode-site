const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./db.sqlite')

db.serialize(() => {
    db.run('DROP TABLE IF EXISTS blogPosts')
    db.run('DROP TABLE IF EXISTS users')
    db.run('DROP TABLE IF EXISTS waitlist')
})

