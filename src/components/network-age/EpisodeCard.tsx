import Text from '../text/Text'
import classNames from "classnames"
import React from 'react'
import Card from "../page/Card"
import {Episode} from '../../types/Episode'
import './EpisodeCard.scss'
import Row from '../spacing/Row'
import { FaArrowRight, FaClock } from 'react-icons/fa'
import Col from '../spacing/Col'
import moment from 'moment'
import GoAway from '../nav/GoAway'

interface EpisodeProps extends React.HTMLAttributes<HTMLDivElement> {
  episode: Episode
}

const EpisodeCard : React.FC<EpisodeProps> = ({ episode, children, className, ...props }) => {
  return (
    <Card className={classNames('episode', className, { })}
      {...props}
      href={episode.link}
    >
      <Row>
        <Text large mono className='yellow'>{episode.title}</Text>
        <Text>
          <Row className='yellow'>
            <FaClock className='clock' />
            {moment(episode.isoDate).fromNow()}
          </Row>
        </Text>
      </Row>
      <Text dangerouslySetInnerHTML={{ __html: episode.content.split('<p>')[1]}} />
      {children}
    </Card>
  )
}

export default EpisodeCard