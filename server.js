const app = require('express')()
const Parser = new require('rss-parser')
const parser = new Parser()
const PODCAST_URL = `https://media.rss.com/thenetworkage/feed.xml`

app.get('/api/feed', async (req, res) => {
  const feed = await parser.parseURL(PODCAST_URL)
  
  res.json(feed)
})

app.listen(8080, () => console.log('app listening on 8080'))