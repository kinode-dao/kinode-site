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
import edgar from '../../assets/img/edgar.jpeg'

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post,
  big?: boolean
}

const PostCard: React.FC<PostCardProps> = ({ post, className, big, ...props }) => {

  const [postPreview, setPostPreview] = useState('')
  const isMobile = isMobileCheck()
  const { token } = useSiteStore()

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

  return (
    <Col
      className={classNames('post-card', className, { isMobile })}
    >
      <div className='bg' />
      <div className='shine super-shine' />
      <div
        className='post-card-content'
        style={{
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          display: 'flex',
          flexDirection: big ? 'row' : 'column'
        }}>
        <div
          className='left-side'
          style={{
            backgroundImage: `url(${post.thumbnailImage})`
          }}
        />
        <Row className='admin buttons' between>
          {token && <>
            <RouterLink to={`/blog/edit/${post.slug}`} className='button edit'>
              Edit
            </RouterLink>
            {post.deleted === 0 && <Button onClick={() => onDeletePost(post.slug)} className='button delete'>
              Delete
            </Button>}
            {post.deleted === 1 && <Button onClick={() => onUndeletePost(post.slug)} className='button undelete'>
              Undelete
            </Button>}
          </>}
        </Row>
        <Col className='post-deets'>
          <h2 className='post-title'>
            <RouterLink className='permalink' to={`/blog/post/${post.slug}`}>
              {post.title}
            </RouterLink>
          </h2>
          <Col className='post-content' dangerouslySetInnerHTML={{ __html: postPreview }} />
          <Row className='post-footer' between>
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
      </div>
    </Col>
  )
}

export default PostCard