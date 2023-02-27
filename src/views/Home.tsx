import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'

import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaBars, FaDiscord, FaGithub, FaGripHorizontal, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa'
import HomeMenu from '../components/phonebook/HomeMenu'
import { isMobileCheck } from '../utils/dimensions'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import Entry from '../components/spacing/Entry'
import Divider from '../components/spacing/Divider'
import CopyIcon from '../components/text/CopyIcon'
import Link from '../components/nav/Link'
import Marquee from 'react-fast-marquee'
import stars from '../assets/img/night-sky-stars-galaxies-sky-dusk 2.png'
import stars2 from '../assets/img/shiny-stars-night-sky-starry-night-sky 1.png'
import black from '../assets/img/black-background-paper-texture-similar-concrete-wall 1.png'
import mars from '../assets/img/mars-set-solar-system-planets-rendered-3d-elements-this-image-furnished-by-nasa 1.png'
import dunes from '../assets/img/bg 1.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import './Home.scss'

type Page = 'general' | 'apps' | 'blog' | 'other'

const Home  = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()
  const parallax = useRef(null)
  
  const texts = [
    'dApps',
    'Crypto',
    'games',
    'Defi',
    'NFTs',
    'Community',
    'Web3',
    'Builders',
    'Explorers',
    ]


  return (
    <Col className='home-container'>
      <Row className='bg fill stars'></Row>
      <Row className='bg fill stars2'></Row>
      <Row className='bg fill black'></Row>
      <img src={mars} className='bg mars'></img>
      <img src={dunes} className='bg fill dunes'></img>
      <Marquee gradient={false}>
        <Text> &nbsp;* WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY 
        </Text>
      </Marquee>
      <Col className={classNames('home', { isMobile })}>
        <Navbar menuOpen={menuOpen} onToggle={onToggle} />
        <Container>
          <Row className={classNames('main', { isMobile })} between>
            <Text large>I<br/>G<br/>N<br/>I<br/>T<br/>E</Text>
            <Col className='title-container'>
              <Col className={classNames('title', { isMobile })}>
                <Text className='untyped'>
                  A LAUNCHPAD <br/> FOR&nbsp;
                  <ReactTypingEffect 
                    className='typed'
                    cursorClassName='cursor'
                    text={texts}
                    speed={100}
                    eraseDelay={5000}
                    typingDelay={0}
                  />
                </Text>
              </Col>
              <Text className={classNames('sidecard blued', { isMobile })}>
                <span className='blue'>Ignite is an incubator</span> for ambitious Web3 projects built atop the Uqbar network. Ignite offers select projects valuable resources, including operations consulting, technical advising, and capital through investment. 
              </Text>
            </Col>
            {!menuOpen && <Row className='the-portal'></Row>}
            {menuOpen && <Col className={classNames('home-menu mr1', { isMobile, menuOpen })}>
              <div className='overlay' onClick={onToggle}></div>
              <Row between className='book'>

                <Col className='page'>
                  {page == 'general' && <Entry className='mt1' title='GENERAL'>
                    <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/'>WHAT IS UQBAR</a>
                    <Divider />
                    <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar-clearpaper/'>CLEARPAPER</a>
                    <Divider />
                    <a target='_blank' href='https://uqbarnetwork.medium.com/zk-execution-and-uqbar-a8f49784155e'>ZK-ROLLUPS</a>
                    <Divider />
                    <a target='_blank' href='https://uqbar-network.gitbook.io/dev-docs/'>DEV DOCS</a>
                  </Entry>}
                  {page === 'apps' && <Entry className='mt1' title='APPS'>
                    <a target='_blank' href='/pokur'>POKUR</a>
                    <Divider />
                    <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/uqbar-development-suite'>SUITE</a>
                    <Divider />
                    <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/escape'>ESCAPE</a>
                    <Divider />
                    <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/handshake'>HANDSHAKE</a>
                  </Entry>}
                  {page == 'blog' && <Entry className='mt1' title='CONTENT'>
                    <a target='_blank' href='https://mirror.xyz/0xE030ad9751Ca3d90D4E69e221E818b41146c2129'>BLOG</a>
                    <Divider />
                    <a target='_blank' href='https://uqbarnetwork.medium.com/the-uqbar-library-12e5beba6c81'>LIBRARY</a>
                    <Divider />
                    <a target='_blank' href='https://www.youtube.com/channel/UC1Mb7Y7Yytdw9LOmUFdEKbA'>TEAM <br/> INTERVIEWS</a>
                    <Divider />
                    <Link href='/age'>NETWORK AGE <br/> PODCAST</Link>
                  </Entry>}
                  {page == 'other' && <Entry className='mt1' title='OTHER'>
                    <a target='_blank' href='https://github.com/uqbar-dao'>GITHUB</a>
                    <Divider />
                    <a target='_blank' href='https://urbit.org/organizations/uqbar'>APPLICATIONS</a>
                    <Divider />
                    <Row>
                      <a>URBIT </a>
                        <CopyIcon text='~hocwyn-tipwex/uqbar-event-horizon-forever' />
                    </Row>
                  </Entry>}
                </Col>

                <Col className='tabs'>
                  <Row onClick={()=> setPage('general')} className={`tab ${classNames({ isMobile, active: page == 'general' })}`}>GENERAL</Row>
                  <Row onClick={()=> setPage('apps')} className={`tab ${classNames({ isMobile, active: page == 'apps' })}`}>APPS</Row>
                  <Row onClick={()=> setPage('blog')} className={`tab ${classNames({ isMobile, active: page == 'blog' })}`}>CONTENT</Row>
                  <Row onClick={()=> setPage('other')} className={`tab ${classNames({ isMobile, active: page == 'other' })}`}>OTHER</Row>
                </Col>
              </Row>
              <Row between className='socials'> 
                <a target='_blank' href='https://discord.gg/G5VVqtjbVG'><FaDiscord /></a>
                <a target='_blank' href='https://github.com/uqbar-dao'><FaGithub /></a>
                <a target='_blank' href='https://twitter.com/uqbarnetwork'><FaTwitter /></a>
                <a target='_blank' href='https://uqbarnetwork.medium.com/'><FaMedium /></a>
                <a target='_blank' href='https://t.me/uqbarnetwork'><FaTelegram /></a>
              </Row>
            </Col>}
          </Row>
        </Container>
        <Container>
          <Row>
            <Text className='blued'>my text goes here</Text>
          </Row>
        </Container>
      </Col>
    </Col>

  )
}

export default Home
