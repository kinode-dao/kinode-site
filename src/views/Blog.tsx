import * as Scroll from 'react-scroll'
import Text from '../components/text/Text'
import { isMobileCheck } from '../utils/dimensions'
import './Blog.scss'
import { useEffect, useState } from 'react'
import Col from '../components/spacing/Col'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import { useParams } from 'react-router-dom'
import MenuItems from '../components/MenuItems'
import useSiteStore from '../store/siteStorage'
import { PostPage } from '../components/blog/PostPage'
import { FooterMenu } from '../components/phonebook/FooterMenu'
import { PostSections } from '../components/blog/PostSections'
import Loader from '../components/popups/Loader'
import { SignUpForNewsletter } from '../components/phonebook/SignUpForNewsletter'

const Blog = () => {
  const { token, posts, setPosts, ourPost, setOurPost } = useSiteStore()
  const [postSlug, setPostSlug] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = isMobileCheck()
  const params = useParams()
  console.log({ params, posts })

  useEffect(() => {
    if (params.slug && posts.find(post => post.slug === params.slug)) {
      console.log({ slug: params.slug })
      setPostSlug(params.slug)
      setOurPost(posts.find(post => post.slug === params.slug))
    } else if (params.previewJson) {
      try {
        const previewJson = JSON.parse(decodeURIComponent(params.previewJson))
        console.log({ previewJson })
        setPosts([previewJson])
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
      setPostSlug('')
      setOurPost(undefined)
    }
  }, [params, postSlug, posts])

  useEffect(() => {
    const headers: any = {
      'accepts': 'application/json'
    }
    if (token) {
      headers['authorization'] = `Bearer ${token}`
    }
    fetch('/api/blog/posts', { headers })
      .then(data => data.json())
      .then(data => {
        console.log('GOT DATA', data)
        setPosts(data?.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()))
      })
  }, [token])

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return <Col className={classNames('page-container', { isMobile })}>
    <Loader images={ourPost ? [ourPost?.headerImage || '', ourPost?.thumbnailImage || ''] : undefined} />
    <Col className={classNames('blog page', { isMobile, mainPage: !ourPost })}>
      <Col className={classNames('main', { isMobile })}>
        <Col
          className={classNames('header', { forEpisode: Boolean(ourPost) })}
          style={{
            backgroundImage: Boolean(ourPost) ? `url(${ourPost?.headerImage})` : ''
          }}
        >
          <Text className='title'>
            <Scroll.Element name='top' />
            <Text>{Boolean(ourPost) ? 'Post: ' + ourPost?.title : 'Blog'}</Text>
          </Text>
        </Col>
        {ourPost
          ? <PostPage post={ourPost} />
          : <PostSections />}
      </Col>
    </Col>
    {!menuOpen && <SignUpForNewsletter />}
    <FooterMenu />
    <MenuItems
      onToggle={onToggle}
      isMobile={isMobile}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
    />
    <Navbar onToggle={onToggle} menuOpen={menuOpen} backBtnLink={ourPost ? '/blog' : undefined} overrideText='' />
  </Col>
}

export default Blog