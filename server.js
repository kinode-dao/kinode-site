const app = require('express')()
const Parser = new require('rss-parser')
const parser = new Parser()
const PODCAST_URL = `https://media.rss.com/thenetworkage/feed.xml`
const marked = require('marked')
const sqlite3 = require('sqlite3').verbose()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(express.json())

const SECRET_KEY = 'extra ecclesiam nulla salus'

// Podcast
app.get('/api/feed', async (req, res) => {
  // fetch episodes from rss.com
  const feed = await parser.parseURL(PODCAST_URL)
  
  res.json(feed)
})

// Blog

// blogin 
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Here, you would look up the user in your database
  const db = new sqlite3.Database('./db.sqlite')
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

// create post
app.post('/api/blog/posts', authenticateToken, (req, res) => {
  // parse it to markdown to ensure it's valid
  try {
    marked(req.body && req.body.content)
  } catch (e) {
    return res.status(400).send('error parsing markdown')
  }

  // replace all non-alphanumerics
  const slug = req.body.title.toLowerCase().replace(/[^a-zA-Z0-9-_]/g, '-')

  // write the file to db
  const db = new sqlite3.Database('./db.sqlite')
  db.run('INSERT INTO blogPosts (slug, content, title, date, headerImage, thumbnailImage) VALUES (?, ?, ?, ?, ?)', 
    [
      slug,
      req.body.content, 
      req.body.title,
      new Date(), 
      req.body.headerImage, 
      req.body.thumbnailImage
    ], 
  (err) => {
    if (err) {
      return res.status(500).send('error writing to db')
    }
    res.status(201).send('success')
  })
})

// all posts
app.get('/api/blog/posts', (req, res) => {
  // get all posts from db
  const db = new sqlite3.Database('./db.sqlite')
  db.all('SELECT * FROM blog_posts', (err, rows) => {
    if (err) {
      return res.status(500).send('error reading from db')
    }
    res.json(rows)
  })
})

// get post by id
app.get('/api/blog/posts/:slug', (req, res) => {
  const db = new sqlite3.Database('./db.sqlite')
  db.get('SELECT * FROM blog_posts WHERE slug = ?', [req.params.slug], (err, row) => {
    if (err) {
      return res.status(500).send('error reading from db')
    }
    res.json(row)
  })
})

// edit post
app.put('/api/blog/posts/:slug', authenticateToken, (req, res) => {
  const db = new sqlite3.Database('./db.sqlite')
  db.run('UPDATE blog_posts SET slug = ?, content = ?, title = ?, headerImage = ?, thumbnailImage = ? WHERE slug = ?', 
    [
      req.body.slug,
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

app.listen(8080, () => console.log('blog/podcast app listening on 8080'))