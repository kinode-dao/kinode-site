const express = require('express')
const app = express()
const Parser = require('rss-parser')
const parser = new Parser()
const PODCAST_URL = `https://media.rss.com/thenetworkage/feed.xml`
const sqlite3 = require('sqlite3').verbose()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const slugify = require('./src/utils/slugify')

app.use(express.json())

const SECRET_KEY = 'extra ecclesiam nulla salus'
const db = new sqlite3.Database(process.env.NODE_ENV === 'production' ? './db.sqlite' : './db.test.sqlite')

// Podcast
app.get('/api/feed', async (req, res) => {
  // fetch episodes from rss.com
  const feed = await parser.parseURL(PODCAST_URL)
  
  res.json(feed)
})

// Blog

// blogin 
app.post('/api/blog/login', async (req, res) => {
  const { username, password } = req.body;
  // Here, you would look up the user in your database
  const user = await new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
      if (err) {
        reject(err)
      }
      resolve(row)
    })
  })
  if (!user) {
    return res.status(401).send('Invalid credentials');
  }
  const isValid = await bcrypt.compare(password, user.passwordHash)
  if (!isValid) {
    return res.status(401).send('Invalid credentials')
  }
  const token = jwt.sign({ userID: user.userID }, SECRET_KEY, { expiresIn: '6h' })
  res.send({ token })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/protected', authenticateToken, (req, res) => {
    res.send('success')
})

// create post
app.post('/api/blog/posts', authenticateToken, (req, res) => {
  // replace all non-alphanumerics
  const slug = slugify(req.body.title)

  // write the file to db
  db.run('INSERT INTO blogPosts (slug, content, title, date, headerImage, thumbnailImage) VALUES (?, ?, ?, ?, ?, ?)', 
    [
      slug,
      req.body.content, 
      req.body.title,
      +new Date(),
      req.body.headerImage, 
      req.body.thumbnailImage
    ], 
  (err) => {
    if (err) {
      return res.status(500).send('error writing to db')
    }
    res.status(201).send({ success: true })
  })
})

// all posts
app.get('/api/blog/posts', (req, res) => {
  // get all posts from db
  db.all('SELECT * FROM blogPosts', (err, rows) => {
    if (err) {
        console.error(err)
      return res.status(500).send('error reading from db')
    }
    res.json(rows)
  })
})

// get post by id
app.get('/api/blog/posts/:slug', (req, res) => {
  db.get('SELECT * FROM blogPosts WHERE slug = ?', [req.params.slug], (err, row) => {
    if (err) {
      return res.status(500).send('error reading from db')
    }
    res.json(row)
  })
})

// edit post
app.put('/api/blog/posts/:slug', authenticateToken, (req, res) => {
  // replace all non-alphanumerics
  const slug = slugify(req.body.title)
  db.run('UPDATE blogPosts SET content = ?, title = ?, headerImage = ?, thumbnailImage = ? WHERE slug = ?', 
    [
      req.body.content, 
      req.body.title,
      req.body.headerImage, 
      req.body.thumbnailImage,
      req.params.slug
    ], 
  (err) => {
    if (err) {
      return res.status(500).send('error writing to db')
    }
    res.status(201).send('success')
  })
})

module.exports = app