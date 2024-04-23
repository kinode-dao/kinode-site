import Text from '../text/Text'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import './PostCard.scss'
import Row from '../spacing/Row'
import Col from '../spacing/Col'
import { isMobileCheck } from '../../utils/dimensions'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Post } from '../../types/Post'
import { marked } from 'marked'
import * as DOMPurify from 'dompurify'
import * as Scroll from 'react-scroll'
import moment from 'moment'
import useSiteStore from '../../store/siteStorage'
import Button from '../form/Button'
import edgar from '../../assets/img/edgar.jpeg'

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post,
  variant?: 'big' | 'small'
}

const PostCard: React.FC<PostCardProps> = ({ post, className, variant, ...props }) => {

  const [postPreview, setPostPreview] = useState('')
  const isMobile = isMobileCheck()
  const { token } = useSiteStore()
  const nav = useNavigate()

  useEffect(() => {
    const preview = DOMPurify.sanitize(marked(post.content) as string).trim()
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

  const onUndeletePost = (slug: string) => {
    if (window.confirm('Are you sure you want to undelete this post?')) {
      fetch(`/api/blog/posts/${slug}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ...post, deleted: 0 })
      })
        .then(data => {
          console.log({ data })
          alert('Post undeleted.')
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
          alert('Something went wrong. Please try again.')
        })
    }
  }

  const onCardClicked = () => {
    Scroll.animateScroll.scrollToTop();
    nav(`/blog/${post.slug}`)
  }

  return (
    <Col
      className={classNames('post-card', className, variant, { isMobile })}
      onClick={onCardClicked}
      style={{
        backgroundImage: variant === 'small' ? post.headerImage : undefined
      }}
      {...props}
    >
      <div className='bg' />
      <div className='shine super-shine' />
      <Col
        className={classNames('post-card-content', variant, { isMobile })}
      >
        <div className='post-card-image'
          style={{ backgroundImage: `url(${post.thumbnailImage})` }}
        />
        {token && <Row className='admin buttons' between>
          <RouterLink to={`/blog/edit/${post.slug}`} className='button edit'>
            Edit
          </RouterLink>
          {post.deleted === 0 && <Button onClick={() => onDeletePost(post.slug)} className='button delete'>
            Delete
          </Button>}
          {post.deleted === 1 && <Button onClick={() => onUndeletePost(post.slug)} className='button undelete'>
            Undelete
          </Button>}
        </Row>}
        <Col className='post-deets'>
          <h2 className='post-title'>
            <RouterLink className='permalink' to={`/blog/post/${post.slug}`}>
              {post.title}
            </RouterLink>
          </h2>
          {variant && <Col className={classNames('post-content', variant)} dangerouslySetInnerHTML={{ __html: postPreview }} />}
          <Row className={classNames('post-footer', variant)} between>
            <Row className='author'>
              <div
                className='author-pic'
                style={{
                  backgroundImage: `url(${edgar})`
                }}
              />
              <Text className='author-name'>{/* post.authorName */ 'Edgar'}</Text>
            </Row>
            <Text className='timestamp'>{moment(post.date).format('DD MMM')}</Text>
          </Row>
        </Col>
      </Col>
    </Col>
  )
}

export default PostCard