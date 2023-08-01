
import uqbar from '../assets/img/uqbar-pink.png'
import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import Card from '../components/page/Card'
import Section from '../components/page/Section'
import './NetworkAge.scss'
import { useEffect, useState } from 'react'
import { Episode } from '../types/Episode'
import EpisodeCard from '../components/network-age/EpisodeCard'
import { FaMediumM, FaPen, FaSpinner, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from '../components/nav/Link'
import GoAway from '../components/nav/GoAway'
import Col from '../components/spacing/Col'
import logo from '../assets/img/bg-sm.jpg'
import aleph from '../assets/img/aleph.jpg'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import Menu from '../components/Menu'
import { Page } from './Home'
import Container from '../components/spacing/Container'
import EmbeddedEpisode from '../components/network-age/EmbeddedEpisode'

const NetworkAge  = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    fetch('/api/feed', { headers: {
      'accepts':'application/json'
    }})
    .then(data => data.json())
    .then(data => {
      console.log(data.items)
      setEpisodes(data.items)
    })
  }, [])

  return <Col className='network-age-container'>
    <Col className={classNames('network-age', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} />
      {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Text className='title bg-bd-blur'>
            <Text>The net </Text>
            <Text className='work-age'>work age</Text>
          </Text>
          <Text className='subtitle bg-bd-blur'>
            The Network Age shines a light on our decentralized future.
            <br/>
            <Text bold>Join the boys</Text> as they dissect and analyze everything from crypto technology and the blockchain economy to digital culture and borderless nations.
          </Text>
        </Col>
        <Col className='recent-episodes'>
          <Text large bold className='title'>
            <Text className='recent'>Recent</Text>
            <Text className='episodes'>Episodes</Text>
          </Text>
          <Col className='eps'>
            {episodes.slice(0, 3).map((ep, i) => <Row className='ep' key={i}>
              <img src={ep.itunes.image} className='icon' />
              <Col className='ep-deets'>
                <Text className='title'>
                  {ep.title.replace(/\(feat\..*\)/, '')}
                  {ep.title.match(/\(feat\./) && <Text className='feat'>
                    {ep.title.match(/\(feat\..*/)}
                  </Text>}
                </Text>
                <Text className='content'>{ep.contentSnippet}</Text>
                <EmbeddedEpisode url={ep.link} title={ep.title} />
              </Col>
            </Row>)}
          </Col>
        </Col>
      </Col>
    </Col>
  </Col>
}

export default NetworkAge