import * as Scroll from 'react-scroll'
import Text from '../text/Text'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import './PostCard.scss'
import Row from '../spacing/Row'
import Col from '../spacing/Col'
import Button from '../form/Button'
import { isMobileCheck } from '../../utils/dimensions'
import { Link as RouterLink } from 'react-router-dom'
import { Post } from '../../types/Post'
import { marked } from 'marked'
import * as DOMPurify from 'dompurify'

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post
  singleton?: boolean
}

const PostCard : React.FC<PostProps> = ({ post, singleton, className, ...props }) => {
  const [readMore, setReadMore] = useState(false)
  const [postContent, setPostContent] = useState('')
  const [postPreview, setPostPreview] = useState('')
  const isMobile = isMobileCheck() 

  useEffect(() => {
    const content = DOMPurify.sanitize(marked(post.content) as string)
    const preview = DOMPurify.sanitize(marked(post.content.slice(0, 256)) as string)
    setPostContent(content)
    setPostPreview(preview)
  }, [post])

  return (
    <Col className={classNames('post', className, { isMobile, singleton })} {...props}>
      <Row className='post-con' style={{ flexWrap: (isMobile || singleton) ? 'wrap' : 'nowrap' }}>
        <Col className='ls'>
          <img src={post.thumbnailImage} className='icon' />
        </Col>
        <Col className='post-deets'>
          <Scroll.Link smooth offset={-256} to='recent-posts' delay={1000}>
            <RouterLink className='permalink' to={`/age/post/${post.slug}`}>
              <Text className='title'>
                {post.title}
              </Text>
            </RouterLink>
          </Scroll.Link>
          {singleton 
            ? <>
              <Text className='content' dangerouslySetInnerHTML={{ __html: postContent }} />
            </> : <>
              {readMore 
                ? <Text className='content' dangerouslySetInnerHTML={{ __html: postContent }} />
                : <Text className='content'>{postPreview}</Text>}
              <Button variant='unstyled' className='read-more' 
                onClick={() => setReadMore(old => !old)}
              >
                {readMore ? 'Less' : 'More'}
              </Button>
            </>}
        </Col>
      </Row>
    </Col>
  )
}

export default PostCard