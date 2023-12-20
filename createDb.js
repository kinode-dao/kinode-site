const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./db.sqlite')

db.serialize(() => {
    // create new table
    db.run('CREATE TABLE IF NOT EXISTS blogPosts (id INTEGER PRIMARY KEY, slug TEXT, content TEXT, title TEXT, date DATE, headerImage TEXT, thumbnailImage TEXT)')

    // create new users table
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, passwordHash TEXT)')

    // create new waitlist table
    db.run('CREATE TABLE IF NOT EXISTS waitlist (id INTEGER PRIMARY KEY, email TEXT, date DATE)')
})