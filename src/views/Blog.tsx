import * as Scroll from 'react-scroll'
import uqbar from '../assets/img/uqbar-pink.png'
import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import './Blog.scss'
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Link from '../components/nav/Link'
import Col from '../components/spacing/Col'
import apod from '../assets/img/Podcasts_(iOS).png'
import gpod from '../assets/img/Google_Podcasts_icon.png'
import spot from '../assets/img/Spotify_App_Logo.png'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import { useParams } from 'react-router-dom'
import { Post } from '../types/Post'
import PostCard from '../components/blog/PostCard'
import Card from '../components/page/Card'

const Blog = () => {
  const [showAllPosts, setShowAllPosts] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [postSlug, setPostSlug] = useState('')
  const isMobile = isMobileCheck()
  const params = useParams()
  const reversedPosts = posts.slice().reverse()
  console.log({ posts, reversedPosts })

  useEffect(() => {
    if (params.all === 'all') {
      setShowAllPosts(true)
    } else if (params.slug) {
      console.log( { slug: params.slug })
      setPostSlug(params.slug)
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

  return <Col className={classNames('blog-container', { isMobile })}>
    <Col className={classNames('blog', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className={classNames('header', {forEpisode: postSlug})}>
          <Row className='nwa-navbar'>
            <Scroll.Link className='nbt' smooth offset={-128} to='top'>
              <Link href={'/blog'} className='nbt'>Uqblog</Link>
            </Scroll.Link>
            {postSlug && <Scroll.Link smooth offset={-128} to='recent-posts'>Posts</Scroll.Link>}
            <Scroll.Link smooth offset={-128} to='related-projects'>Related Projects</Scroll.Link>
            <Scroll.Link smooth offset={-128} to='connect'>Connect</Scroll.Link>
          </Row>
          <Text className='title bg-bd-blur'>
            <Scroll.Element name='top' />
            uq<Text className='work-age'>blog</Text>
          </Text>
          <Col className='subtitle bg-bd-blur'>
            <Text>Jesse apes out in the tweet box.</Text>
          </Col>
          <Row className='join bg-bd-blur'>
            <Link external 
              href='https://podcasts.apple.com/us/podcast/the-blog/id1639202594' 
              className='pod apple row'
            >
              <img src={apod} />
              <Col>
                <Text>Listen on</Text>
                <Text large bold>Apple</Text>
              </Col>
            </Link>
            <Link external 
              href='https://open.spotify.com/show/5VN9BwLfVhIoPpfoAPzGTC' 
              className='pod google row'
            >
              <img src={spot} />
              <Col>
                <Text>Listen on</Text>
                <Text large bold>Spotify</Text>
              </Col>
            </Link>
            <Link external 
              href='https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL3RoZW5ldHdvcmthZ2UvZmVlZC54bWw='
              className='pod spotify row'
            >
              <img src={gpod} />
              <Col>
                <Text>Listen on</Text>
                <Text large bold>Google</Text>
              </Col>
            </Link>
          </Row>
        </Col>
        <Col className='recent-posts'>
          <Scroll.Element name='recent-posts' />
          <Row className='title'>
            {posts.length > 0 
              ? postSlug ? <>
                  <Text bold className='recent'>{showAllPosts ? 'All' : 'Recent'}</Text>
                  <Text bold className='posts'>Posts</Text>
                  {toggleAllPostsLink}
                </> : <></>
              : <>
                <Text bold className='recent'>Loading the</Text>
                <Text bold className='posts'>freshest content...</Text>
              </>}
          </Row>
          <Col className='posts'>
            {reversedPosts?.length > 0 
              ? reversedPosts.find((post, i) => post.slug === postSlug)
                ? <PostCard post={reversedPosts.find((post, i) => post.slug === postSlug)!} singleton />
                : (showAllPosts ? posts : reversedPosts.slice(0, 3)).map((post, i) => <PostCard post={post} key={i} />)
              : noPost(postSlug)}
            {toggleAllPostsLink}
          </Col>
        </Col>
        
        <Col className='footer'>
          <Col className='related-projects'>
            <Scroll.Element name='related-projects' />
            <Row className='title'>
              <Text className='related'>Related</Text>
              <Text className='projects'>Projects</Text>
            </Row>
            <Row className='projs'>
              {[
                {
                  name: 'Uqbar',
                  desc: 'Uqbar is a seamless development environment and Zero-Knowledge rollup to Ethereum.',
                  icon: uqbar,
                  href: 'https://uqbar.network/'
                },
              ].map(proj => <Col key={proj.name} className='proj'>
                <Link href={proj.href} external>
                  <Row className='iconname'>
                    <img className='icon' src={proj.icon} />
                    <Text className='name'>{proj.name}</Text>
                  </Row>
                </Link>
                <Text className='desc'>{proj.desc}</Text>
              </Col>)}
            </Row>
          </Col>
          <Row className='title'>
            <Scroll.Element name='connect' />
            <Text className='connect'>Connect</Text>
            <Text className='with-us'>with us</Text>
          </Row>
          <Col className='connectrons'>
            <Row className='x'>
              <Link href='//x.com/NetworkAgePod' external>@NetworkAgePod</Link>
            </Row>
          </Col>
        </Col>

        <Col className='super-footer'>
          <Row className='addresses-etc'>
            <Navbar onToggle={() => {}} menuOpen={false} hideBtn overrideText={'PRESENTED BY UQBAR'} />
            <Row className='addresses'>
              
            </Row>
          </Row>
          <Row className='tiny-stripe'>
            <Text className='rights-reserved'>Copyright ©2023 UQBAR. All Rights Reserved.</Text>
          </Row>
        </Col>
      </Col>
    </Col>
  </Col>
}

export default Blog