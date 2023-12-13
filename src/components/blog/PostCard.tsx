import * as Scroll from 'react-scroll'
import Text from '../text/Text'
import classNames from 'classnames'
import React, { useState } from 'react'
import './PostCard.scss'
import Row from '../spacing/Row'
import Col from '../spacing/Col'
import Button from '../form/Button'
import { isMobileCheck } from '../../utils/dimensions'
import { Link as RouterLink } from 'react-router-dom'
import { Post } from '../../types/Post'

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post
  index: number
  singleton?: boolean
}

const EpisodeCard : React.FC<PostProps> = ({ post, index, singleton, className, ...props }) => {
  const [readMore, setReadMore] = useState(false)
  const isMobile = isMobileCheck() 

  return (
    <Col className={classNames('ep', className, { isMobile, singleton })} {...props}>
      <Row className='ep-con' style={{ flexWrap: (isMobile || singleton) ? 'wrap' : 'nowrap' }}>
        <Col className='ls'>
          <img src={post.itunes.image} className='icon' />
        </Col>
        <Col className='ep-deets'>
          <Scroll.Link smooth offset={-256} to='recent-episodes' delay={1000}>
            <RouterLink className='permalink' to={`/age/episode/${index}`}>
              <Text className='title'>
                {post.title.replace(/\(feat\..*\)/, '')}
                {post.title.match(/\(feat\./) && <Text className='feat'>
                  {post.title.match(/\(feat\..*/)}
                </Text>}
              </Text>
            </RouterLink>
          </Scroll.Link>
          {singleton 
            ? <>
              <EmbeddedEpisode url={post.link} title={post.title} />
              <Text className='content' dangerouslySetInnerHTML={{ __html: post.content }} />
            </> : <>
              {readMore 
                ? <Text className='content' dangerouslySetInnerHTML={{ __html: post.content }} />
                : <Text className='content'>{post.contentSnippet.replace(/timestamp.*/si, '')}</Text>}
              <Button variant='unstyled' className='read-more' 
                onClick={() => setReadMore(old => !old)}
              >
                {readMore ? 'Less' : 'More'}
              </Button>
            </>}
        </Col>
      </Row>
      {!singleton && <EmbeddedEpisode url={post.link} title={post.title} />}
    </Col>
  )
}

export default EpisodeCard