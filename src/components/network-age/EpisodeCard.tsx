import * as Scroll from 'react-scroll'
import Text from '../text/Text'
import classNames from 'classnames'
import React, { useState } from 'react'
import { Episode } from '../../types/Episode'
import './EpisodeCard.scss'
import Row from '../spacing/Row'
import { FaArrowRight, FaClock, FaLink } from 'react-icons/fa6'
import Col from '../spacing/Col'
import moment from 'moment'
import GoAway from '../nav/GoAway'
import EmbeddedEpisode from './EmbeddedEpisode'
import Button from '../form/Button'
import { isMobileCheck } from '../../utils/dimensions'
import { Link as RouterLink } from 'react-router-dom'

interface EpisodeProps extends React.HTMLAttributes<HTMLDivElement> {
  episode: Episode
  index: number
  singleton?: boolean
}

const EpisodeCard: React.FC<EpisodeProps> = ({ episode, index, singleton, className, ...props }) => {
  const [readMore, setReadMore] = useState(false)
  const isMobile = isMobileCheck()

  return (
    <Col className={classNames('ep', className, { isMobile, singleton })} {...props}>
      <Row className='ep-con' style={{ flexWrap: (isMobile || singleton) ? 'wrap' : 'nowrap' }}>
        <Col className='left-side'>
          <img src={episode.itunes.image} className='icon' />
        </Col>
        <Col className='ep-deets'>
          <Scroll.Link smooth offset={-256} to='recent-episodes' delay={1000}>
            <RouterLink className='permalink' to={`/age/episode/${index}`}>
              <Text className='title'>
                {episode.title.replace(/\(feat\..*\)/, '')}
                {episode.title.match(/\(feat\./) && <Text className='feat'>
                  {episode.title.match(/\(feat\..*/)}
                </Text>}
              </Text>
            </RouterLink>
          </Scroll.Link>
          {singleton
            ? <>
              <EmbeddedEpisode url={episode.link} title={episode.title} />
              <Text className='content' dangerouslySetInnerHTML={{ __html: episode.content }} />
            </> : <>
              {readMore
                ? <Text className='content' dangerouslySetInnerHTML={{ __html: episode.content }} />
                : <Text className='content'>{episode.contentSnippet.replace(/timestamp.*/si, '')}</Text>}
              <Button variant='unstyled' className='read-more'
                onClick={() => setReadMore(old => !old)}
              >
                {readMore ? 'Less' : 'More'}
              </Button>
            </>}
        </Col>
      </Row>
      {!singleton && <EmbeddedEpisode url={episode.link} title={episode.title} />}
    </Col>
  )
}

export default EpisodeCard