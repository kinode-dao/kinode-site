const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./db.sqlite')

db.serialize(() => {
    // drop old table
    db.run('DROP TABLE IF EXISTS blogPosts')
    // create new table
    db.run('CREATE TABLE IF NOT EXISTS blogPosts (id INTEGER PRIMARY KEY, slug TEXT, content TEXT, title TEXT, date DATE, headerImage TEXT, thumbnailImage TEXT)')

    // drop old users table
    db.run('DROP TABLE IF EXISTS users')
    // create new users table
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, passwordHash TEXT)')

    // drop old waitlist table
    db.run('DROP TABLE IF EXISTS waitlist')
    // create new waitlist table
    db.run('CREATE TABLE IF NOT EXISTS waitlist (id INTEGER PRIMARY KEY, email TEXT, date DATE)')
})