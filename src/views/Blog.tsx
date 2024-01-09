import * as Scroll from 'react-scroll'
import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import './Blog.scss'
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Link from '../components/nav/Link'
import Col from '../components/spacing/Col'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import { useParams } from 'react-router-dom'
import { Post } from '../types/Post'
import PostCard from '../components/blog/PostCard'
import Card from '../components/page/Card'
import Menu from '../components/Menu'
import CopyrightInfo from '../components/phonebook/CopyrightInfo'

const Blog = () => {
  const [showAllPosts, setShowAllPosts] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [postSlug, setPostSlug] = useState('')
  const [ourPost, setOurPost] = useState<Post>()
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<'general' | 'apps' | 'blog' | 'other'>('general')
  const isMobile = isMobileCheck()
  const params = useParams()
  console.log({ params })
  let reversedPosts = posts.slice().reverse()

  useEffect(() => {
    if (params.all === 'all') {
      setShowAllPosts(true)
      setPostSlug('')
      setOurPost(undefined)
    } else if (params.slug) {
      console.log( { slug: params.slug })
      setShowAllPosts(false)
      setPostSlug(params.slug)
      setOurPost(posts.find(post => post.slug === params.slug))
    } else if (params.previewJson) {
      try {
        const previewJson = JSON.parse(decodeURIComponent(params.previewJson))
        console.log({ previewJson })
        setPosts([previewJson])
        reversedPosts = [previewJson]
        setShowAllPosts(false)
        setPostSlug('preview-post')
        setOurPost(previewJson)

        console.log({
          previewJson,
          posts,
        })
      } catch {
        alert('Invalid preview data.')
      }
    } else {
      setShowAllPosts(true)
      setPostSlug('')
      setOurPost(undefined)
    }
  }, [params])

  useEffect(() => {
    fetch('/api/blog/posts', { headers: {
      'accepts':'application/json'
    }})
    .then(data => data.json())
    .then(data => {
      console.log('GOT DATA', data)
      setPosts(data)
    })
  }, [])

  const upRight = <FaArrowRight style={{ fontSize: 16, transform: 'rotate(-45deg)' }} />
  const toggleAllPostsLink = <Scroll.Link smooth offset={-256} to='recent-posts' delay={1000} className='all'>
    <Link href={showAllPosts ? '/blog' : '/blog/all'}
      onClick={() => {
        setShowAllPosts(old => !old)
        setPostSlug('')
      }}
    >
      {showAllPosts ? 'Recent' : 'More'} Posts {upRight} 
    </Link>
  </Scroll.Link>

  const noPost = (slug: string) => {
    console.log({slug})
    return <Card className='no-post'>
      <Text className='no-post'>No post found.</Text>
    </Card>
  }

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return <Col className={classNames('page-container', { isMobile })}>
    <Col className={classNames('blog page', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className={classNames('header', {forEpisode: Boolean(ourPost)})}>
          <Navbar onToggle={onToggle} menuOpen={menuOpen} overrideText='' />
          <Text className='title'>
            <Scroll.Element name='top' />
            <Text>blog</Text>
          </Text>
        </Col>
        <Col className='recent-posts'>
          <Scroll.Element name='recent-posts' />
          <Row className='title'>
            {posts.length > 0 
              ? ourPost ? <>
                  <Text bold className='recent'>Post:</Text>
                  <Text bold className='posts'>{ourPost.title}</Text>
                </> : <>
                  <Text bold className='recent'>Recent</Text>
                  <Text bold className='posts'>Posts</Text>
                </>
              : <>
                <Text bold className='recent'>Loading the</Text>
                <Text bold className='posts'>freshest content...</Text>
              </>}
          </Row>
          <Col className='posts'>
            {ourPost
              ? <PostCard post={ourPost} singleton />
              : reversedPosts?.length > 0 
                ? (showAllPosts 
                    ? reversedPosts 
                    : reversedPosts.slice(0, 3)
                  ).map((post, i) => <PostCard post={post} key={i} />)
                : noPost(postSlug)}
          </Col>
        </Col>
        <CopyrightInfo />
      </Col>
    </Col>
    {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
  </Col>
}

export default Blog