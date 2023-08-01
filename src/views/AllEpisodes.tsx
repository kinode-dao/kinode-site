
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

const AllEpisodes  = () => {
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

  const upRight = <FaArrowRight style={{ fontSize: 16, transform: 'rotate(-45deg)' }} />

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
          <Row className='title'>
            <Text bold className='recent'>All</Text>
            <Text bold className='episodes'>Episodes</Text>
            <Link className='all' href={'/age'}>Recent Episodes {upRight} </Link>
          </Row>
          <Col className='eps'>
            {episodes?.length > 0 ? episodes.map((ep, i) => <EpisodeCard episode={ep} key={i} />)
            : 'Loading the freshest content...'}
          </Col>
        </Col>
        
        <Col className='footer'>
          <Row className='title'>
            <Text className='connect'>Connect</Text>
            <Text className='with-us'>with us</Text>
          </Row>
          <Col className='connectrons'>
            <Row className='groups'>
              <Row className='c1'>
                <Text large bold className='sig'>~</Text>
                <Text className='group'>~mister-hoster-dozzod-hocwet/
                network-age-antechamber</Text>
              </Row>
              <Row className='c1'>
                <Text large bold className='sig'>~</Text>
                <Text className='group'>~hocwyn-tipwex/uqbar-event-horizon-forever</Text>
              </Row>
            </Row>
            <Row className='x'>
              <Link href='//x.com/basileSportif' external>@basileSportif</Link>
              <Link href='//x.com/AlephDao' external>@AlephDao</Link>
              <Link href='//x.com/BichulR' external>@BichulR</Link>
            </Row>
          </Col>
        </Col>

        <Col className='super-footer'>
          <Row className='addresses-etc'>
            <Navbar onToggle={() => {}} menuOpen={false} hideBtn />
            <Row className='addresses'>
              <Col className='street address'>
                <Text className='label'>Address</Text>
                <Text className='value'>450 Granada Pkwy</Text>
                <Text className='value'>Lindenhurst NY 11757</Text>
              </Col>
              <Col className='email address'>
                <Text className='label'>Email Address</Text>
                <Text className='value'>DJDOORSINC@gmail.com</Text>
              </Col>
              <Col className='phone address'>
                <Text className='label'>Phone</Text>
                <Text className='value'>631-946-2600</Text>
              </Col>
            </Row>
          </Row>
          <Row className='tiny-stripe'>
            <Text className='rights-reserved'>Copyright ©2023 UQBAR. All Rights Reserved.</Text>
            <Text className='lynx'>Privacy  /  Terms  /  Our Blog  /  FAQs</Text>
          </Row>
        </Col>
      </Col>
    </Col>
  </Col>
}

export default AllEpisodes