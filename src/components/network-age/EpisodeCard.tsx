import Text from '../text/Text'
import classNames from 'classnames'
import React, { useState } from 'react'
import Card from '../page/Card'
import {Episode} from '../../types/Episode'
import './EpisodeCard.scss'
import Row from '../spacing/Row'
import { FaArrowRight, FaClock } from 'react-icons/fa'
import Col from '../spacing/Col'
import moment from 'moment'
import GoAway from '../nav/GoAway'
import EmbeddedEpisode from './EmbeddedEpisode'
import Button from '../form/Button'
import { isMobileCheck } from '../../utils/dimensions'

interface EpisodeProps extends React.HTMLAttributes<HTMLDivElement> {
  episode: Episode
}

const EpisodeCard : React.FC<EpisodeProps> = ({ episode, className, ...props }) => {
  const [readMore, setReadMore] = useState(false)
  const isMobile = isMobileCheck() 

  return (
    <Col className={classNames('ep', className, { isMobile })} {...props}>
      <Row className='ep-con' style={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
        <Col className='ls'>
          <img src={episode.itunes.image} className='icon' />
        </Col>
        <Col className='ep-deets'>
          <Text className='title'>
            {episode.title.replace(/\(feat\..*\)/, '')}
            {episode.title.match(/\(feat\./) && <Text className='feat'>
              {episode.title.match(/\(feat\..*/)}
            </Text>}
          </Text>
          {!readMore && <Text className='content'>{episode.contentSnippet.replace(/timestamp.*/si, '')}</Text>}
          {readMore && <Text className='content' dangerouslySetInnerHTML={{ __html: episode.content }} />}
          <Button variant='unstyled' className='read-more' 
            onClick={() => setReadMore(old => !old)}
          >
            {readMore ? 'Less' : 'More'}
          </Button>
        </Col>
      </Row>
      <EmbeddedEpisode url={episode.link} title={episode.title} />
    </Col>
  )
}

export default EpisodeCard