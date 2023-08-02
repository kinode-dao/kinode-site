
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
import { FaArrowRight, FaMediumM, FaPen, FaSpinner, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from '../components/nav/Link'
import GoAway from '../components/nav/GoAway'
import Col from '../components/spacing/Col'
import urbit from '../assets/img/urbit.jpg'
import aleph from '../assets/img/aleph.jpg'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import Menu from '../components/Menu'
import { Page } from './Home'
import Container from '../components/spacing/Container'
import EmbeddedEpisode from '../components/network-age/EmbeddedEpisode'
import Reviews from '../components/network-age/Reviews'
import { transform } from 'typescript'
import { useParams } from 'react-router-dom'

const NetworkAge  = () => {
  const [showAllEpisodes, setShowAllEpisodes] = useState(false)
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')
  const isMobile = isMobileCheck()
  const params = useParams()

  useEffect(() => {
    if (params.all === 'all') {
      setShowAllEpisodes(true)
    }
  }, [])

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

  const upRight = <FaArrowRight style={{ fontSize: 16, transform: 'rotate(-45deg)' }} />
  const toggleAllEpsLink = <Link className='all' 
    href={showAllEpisodes ? '/age' : '/age/all'}
    onClick={() => setShowAllEpisodes(old => !old)}
  >
    {showAllEpisodes ? 'Recent' : 'All'} Episodes {upRight} 
  </Link>

  return <Col className={classNames('network-age-container', { isMobile })}>
    <Col className={classNames('network-age', { isMobile })}>
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
          <Row className='title'>
            <Text bold className='recent'>{showAllEpisodes ? 'All' : 'Recent'}</Text>
            <Text bold className='episodes'>Episodes</Text>
            {toggleAllEpsLink}
          </Row>
          <Col className='eps'>
            {episodes?.length > 0 
              ? (showAllEpisodes 
                  ? episodes 
                  : episodes.slice(0, 3)
              ).map((ep, i) => <EpisodeCard episode={ep} key={i} />)
              : 'Loading the freshest content...'}
            {toggleAllEpsLink}
          </Col>
        </Col>

        <Col className='related-projects'>
          <Row className='title'>
            <Text className='related'>Related</Text>
            <Text className='projects'>Projects</Text>
          </Row>
          <Row className='projs'>
            {[
              {
                name: 'Uqbar',
                desc: 'Uqbar is a seamless development environment and Zero-Knowledge rollup to Ethereum.',
                icon: uqbar,
                href: 'https://uqbar.network/'
              },
              {
                name: 'Aleph DAO',
                desc: 'Aleph is a global community of developers and creators building the Network Age.',
                icon: aleph,
                href: 'https://twitter.com/AlephDao'
              },
              {
                name: 'Urbit',
                desc: 'Urbit is a decentralized peer-to-peer network and clean-slate OS.',
                icon: urbit,
                href: 'https://urbit.org/'
              }
            ].map(proj => <Col key={proj.name} className='proj'>
              <Link href={proj.href} external>
                <Row className='iconname'>
                  <img className='icon' src={proj.icon} />
                  <Text className='name'>{proj.name}</Text>
                </Row>
              </Link>
              <Text className='desc'>{proj.desc}</Text>
            </Col>)}
          </Row>
        </Col>
        
        <Col className='footer'>
          <Reviews />
          <Row className='title'>
            <Text className='connect'>Connect</Text>
            <Text className='with-us'>with us</Text>
          </Row>
          <Col className='connectrons'>
            <Row className='x'>
              <Link href='//x.com/NetworkAgePod' external>@NetworkAgePod</Link>
            </Row>
          </Col>
        </Col>

        <Col className='super-footer'>
          <Row className='addresses-etc'>
            <Navbar onToggle={() => {}} menuOpen={false} hideBtn overrideText={'PRESENTED BY UQBAR'} />
            <Row className='addresses'>
              
            </Row>
          </Row>
          <Row className='tiny-stripe'>
            <Text className='rights-reserved'>Copyright ©2023 UQBAR. All Rights Reserved.</Text>
          </Row>
        </Col>
      </Col>
    </Col>
  </Col>
}

export default NetworkAge