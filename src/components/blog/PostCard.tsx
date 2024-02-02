import * as Scroll from 'react-scroll'
import Text from '../text/Text'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import './PostCard.scss'
import Row from '../spacing/Row'
import Col from '../spacing/Col'
import { isMobileCheck } from '../../utils/dimensions'
import { Link as RouterLink } from 'react-router-dom'
import { Post } from '../../types/Post'
import { marked } from 'marked'
import * as DOMPurify from 'dompurify'
import moment from 'moment'
import useSiteStore from '../../store/siteStorage'
import Button from '../form/Button'
import { FaChevronLeft } from 'react-icons/fa'
import humc from '../../assets/img/kinode.png'

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post
  singleton?: boolean
}

const PostCard : React.FC<PostProps> = ({ post, singleton, className, ...props }) => {
  const [postContent, setPostContent] = useState('')
  const [postPreview, setPostPreview] = useState('')
  const isMobile = isMobileCheck() 
  const { token } = useSiteStore()

  useEffect(() => {
    const content = marked(post.content) as string
    const preview = DOMPurify.sanitize(marked(post.content.slice(0, 256) + (post.content.length > 256 ? '...' : '')) as string).trim()
    setPostContent(content)
    setPostPreview(preview)
  }, [post])

  const onDeletePost = (slug: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      fetch(`/api/blog/posts/${slug}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
      .then(data => {
        console.log({ data })
        alert('Post deleted.')
        window.location.reload()
      })
      .catch(err => {
        console.log(err)
        alert('Something went wrong. Please try again.')
      })
    }
  }

  const postLink =<RouterLink className='permalink' to={`/blog/post/${post.slug}`}>
    <Text className='title'>
      {post.title}
    </Text>
  </RouterLink>

  return (
    <Col className={classNames('post', className, { isMobile, singleton })} {...props}>
      <Scroll.Element name='post' />
      <Row className='post-con' style={{ flexWrap: (isMobile || singleton) ? 'wrap' : 'nowrap' }}>
        {singleton
          ? <img src={post.headerImage} className='header-image' /> 
          : <Col className='ls'>
              <img src={post.thumbnailImage} className='icon' />
            </Col>}
        <Row className='buttons' between>
          {singleton && <RouterLink to={`/blog`} className='button back'>
            <FaChevronLeft size={12} /> Back
          </RouterLink>}
          {token && <>
            <RouterLink to={`/blog/edit/${post.slug}`} className='button edit'>
              Edit
            </RouterLink>
            <Button onClick={() => onDeletePost(post.slug)} className='button delete'>
              Delete
            </Button>
          </>}
        </Row>
        <Col className='post-deets'>
          {singleton
            ? <>
                <Text className='content' dangerouslySetInnerHTML={{ __html: postContent }} />
              </>
            : <>
                <Row className='title-date'>
                  {postLink}
                  <span className='date'>
                    {moment(new Date(post.date)).fromNow()}
                  </span>
                </Row>
                <Text className='content' dangerouslySetInnerHTML={{ __html: postPreview }} />
                <Scroll.Link smooth offset={-256} to='top' style={{ marginRight: 'auto' }}>
                  <RouterLink to={`/blog/post/${post.slug}`} className='read-more'>
                    Read More...
                  </RouterLink>
                </Scroll.Link>
              </>}
        </Col>
      </Row>
      {singleton && <img className='suffix' src={humc} />}
    </Col>
  )
}

export default PostCard