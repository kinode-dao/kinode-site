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

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post
  singleton?: boolean
}

const PostCard : React.FC<PostProps> = ({ post, singleton, className, ...props }) => {
  const [postContent, setPostContent] = useState('')
  const [postPreview, setPostPreview] = useState('')
  const isMobile = isMobileCheck() 

  useEffect(() => {
    const content = DOMPurify.sanitize(marked(post.content) as string)
    const preview = DOMPurify.sanitize(marked(post.content.slice(0, 256)) as string).trim() + (post.content.length > 256 ? '...' : '')
    setPostContent(content)
    setPostPreview(preview)
  }, [post])

  const postLink =<RouterLink className='permalink' to={`/blog/post/${post.slug}`}>
    <Text className='title'>
      {post.title}
    </Text>
  </RouterLink>

  return (
    <Col className={classNames('post', className, { isMobile, singleton })} {...props}>
      <Scroll.Element name='post' />
      <Row className='post-con' style={{ flexWrap: (isMobile || singleton) ? 'wrap' : 'nowrap' }}>
        <Col className='ls'>
          <img src={post.thumbnailImage} className='icon' />
        </Col>
        <Col className='post-deets'>
          {singleton
            ? <>
                <Text className='content' dangerouslySetInnerHTML={{ __html: postContent }} />
              </>
            : <>
                {postLink}
                <Text className='content' dangerouslySetInnerHTML={{ __html: postPreview }} />
                <Scroll.Link smooth offset={-256} to='top' className='read-more' style={{ marginRight: 'auto' }}>
                  <RouterLink to={`/blog/post/${post.slug}`} className='read-more'>
                    Read More...
                  </RouterLink>
                </Scroll.Link>
              </>}
        </Col>
      </Row>
    </Col>
  )
}

export default PostCard