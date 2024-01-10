import * as Scroll from 'react-scroll'
import uqbar from '../assets/img/humB.png'
import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import './NetworkAge.scss'
import { useEffect, useState } from 'react'
import { Episode } from '../types/Episode'
import EpisodeCard from '../components/network-age/EpisodeCard'
import { FaArrowRight } from 'react-icons/fa'
import Link from '../components/nav/Link'
import Col from '../components/spacing/Col'
import apod from '../assets/img/Podcasts_(iOS).png'
import gpod from '../assets/img/Google_Podcasts_icon.png'
import spot from '../assets/img/Spotify_App_Logo.png'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import Reviews from '../components/network-age/Reviews'
import { useParams } from 'react-router-dom'

const NetworkAge  = () => {
  const [showAllEpisodes, setShowAllEpisodes] = useState(false)
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [episodeNumber, setEpisodeNumber] = useState(-1)
  const isMobile = isMobileCheck()
  const params = useParams()
  const reversedEpisodes = episodes.slice().reverse()
  console.log({episodes,reversedEpisodes})

  useEffect(() => {
    if (params.all === 'all') {
      setShowAllEpisodes(true)
    } else if (params.episode && !isNaN(+params.episode)) {
      setEpisodeNumber(+params.episode)
    }
  }, [params])

  useEffect(() => {
    fetch('/api/feed', { headers: {
      'accepts':'application/json'
    }})
    .then(data => data.json())
    .then(data => {
      // console.log(data.items)
      setEpisodes(data.items)
    })
  }, [])

  const upRight = <FaArrowRight style={{ fontSize: 16, transform: 'rotate(-45deg)' }} />
  const toggleAllEpsLink = <Scroll.Link smooth offset={-256} to='recent-episodes' delay={1000} className='all'>
    <Link href={showAllEpisodes ? '/age' : '/age/all'}
      onClick={() => {
        setShowAllEpisodes(old => !old)
        setEpisodeNumber(-1)
      }}
    >
      {showAllEpisodes ? 'Recent' : 'All'} Episodes {upRight} 
    </Link>
  </Scroll.Link>

  return <Col className={classNames('network-age-container', { isMobile })}>
    <Col className={classNames('network-age', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className={classNames('header', {forEpisode: episodeNumber > -1})}>
          <Row className='nwa-navbar'>
            <Scroll.Link className='nbt' smooth offset={-128} to='top'>
              <Link href={'/age'} className='nbt'>The Network Age Podcast</Link>
            </Scroll.Link>
            {episodeNumber > -1 && <Scroll.Link smooth offset={-128} to='recent-episodes'>Episodes</Scroll.Link>}
            <Scroll.Link smooth offset={-128} to='reviews'>Reviews</Scroll.Link>
            <Scroll.Link smooth offset={-128} to='related-projects'>Related Projects</Scroll.Link>
            <Scroll.Link smooth offset={-128} to='connect'>Connect</Scroll.Link>
          </Row>
          <Text className='title bg-bd-blur'>
            <Scroll.Element name='top' />
            the <Text className='work-age'>network age</Text>
          </Text>
          <Col className='subtitle bg-bd-blur'>
            <Text>Welcome to the decentralized future.</Text>
          </Col>
          <Row className='join bg-bd-blur'>
            <Link external 
              href='https://podcasts.apple.com/us/podcast/the-network-age/id1639202594' 
              className='pod apple row'
            >
              <img src={apod} />
              <Col>
                <Text>Listen on</Text>
                <Text large bold>Apple</Text>
              </Col>
            </Link>
            <Link external 
              href='https://open.spotify.com/show/5VN9BwLfVhIoPpfoAPzGTC' 
              className='pod google row'
            >
              <img src={spot} />
              <Col>
                <Text>Listen on</Text>
                <Text large bold>Spotify</Text>
              </Col>
            </Link>
            <Link external 
              href='https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL3RoZW5ldHdvcmthZ2UvZmVlZC54bWw='
              className='pod spotify row'
            >
              <img src={gpod} />
              <Col>
                <Text>Listen on</Text>
                <Text large bold>Google</Text>
              </Col>
            </Link>
          </Row>
        </Col>
        <Col className='recent-episodes'>
          <Scroll.Element name='recent-episodes' />
          <Row className='title'>
            {episodes.length > 0 
              ? episodeNumber === -1 ? <>
                  <Text bold className='recent'>{showAllEpisodes ? 'All' : 'Recent'}</Text>
                  <Text bold className='episodes'>Episodes</Text>
                  {toggleAllEpsLink}
                </> : <>
                  <Text bold className='recent'>Episode</Text>
                  <Text bold className='episodes'>#{episodeNumber}</Text>
                  {toggleAllEpsLink}
                </>
              : <>
                <Text bold className='recent'>Loading the</Text>
                <Text bold className='episodes'>freshest content...</Text>
              </>}
          </Row>
          <Col className='eps'>
            {episodes?.length > 0 
              ? episodeNumber === -1
                ? (showAllEpisodes 
                    ? episodes 
                    : episodes.slice(0, 3)
                ).map((ep, i) => <EpisodeCard episode={ep} index={episodes.length - i} key={i} />)
              : <EpisodeCard index={episodeNumber} singleton episode={reversedEpisodes[episodeNumber - 1]} />
            : <></>}
            {toggleAllEpsLink}
          </Col>
        </Col>

        <Scroll.Element name='reviews' />
        <Reviews />
        
        <Col className='footer'>
          <Col className='related-projects'>
            <Scroll.Element name='related-projects' />
            <Row className='title'>
              <Text className='related'>Related</Text>
              <Text className='projects'>Projects</Text>
            </Row>
            <Row className='projs'>
              {[
                {
                  name: 'Nectar',
                  desc: 'Nectar is a seamless development environment and Zero-Knowledge rollup to Ethereum.',
                  icon: uqbar,
                  href: 'https://uqbar.network/'
                },
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
          <Row className='title'>
            <Scroll.Element name='connect' />
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
            <Navbar onToggle={() => {}} menuOpen={false} hideBtn overrideText={'PRESENTED BY NECTAR'} />
            <Row className='addresses'>
              
            </Row>
          </Row>
          <Row className='tiny-stripe'>
            <Text className='rights-reserved'>Copyright ©2023 NECTAR. All Rights Reserved.</Text>
          </Row>
        </Col>
      </Col>
    </Col>
  </Col>
}

export default NetworkAge