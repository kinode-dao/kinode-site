import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'

import './Home.scss'
import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaBars, FaDiscord, FaGithub, FaGripHorizontal, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa'
import HomeMenu from '../components/phonebook/HomeMenu'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import Entry from '../components/spacing/Entry'
import Divider from '../components/spacing/Divider'
import CopyIcon from '../components/text/CopyIcon'

type Page = 'general' | 'blog' | 'other'

const Home  = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  return (
    <Col className='home'>
      <Navbar onToggle={onToggle} />
      <Container>
        <Row between style={{height:isMobile?'auto':'100%'}}>
          <Col>
            <Col className={classNames('title', { isMobile })}>
              <Text className='untyped'>
                A CODING <br/>
                ENVIRONMENT <br/> FOR
                <ReactTypingEffect 
                  className='typed'
                  cursorClassName='cursor'
                  text={['WEB3 APPS', 'DOGS', 'SECRETS', 'SOCIETIES', 'DAOS', 'CULTS']}
                  speed={100}
                  eraseDelay={2000}
                  typingDelay={0}
                  />
              </Text>
            </Col>
            <Text className={classNames('sidecard', { isMobile })}>
              Uqbar is a {!isMobile && <br/> }
              one-stop coding environment {!isMobile && <br/>}
              that makes writing and {!isMobile && <br/>}
              deploying smart contracts {!isMobile && <br/>}
              simple, efficient,and secure. 
            </Text>
          </Col>
          {menuOpen && <Col className={classNames('home-menu mr1', { isMobile, menuOpen })}>
            <div className='overlay'></div>
            <Row between className='book'>

              <Col className='page'>
                {page == 'general' && <Entry className='mt1' title='GENERAL'>
                  <a href='https://uqbarnetwork.medium.com/introducing-uqbar-network-6b976e157e18'>WHAT IS UQBAR</a>
                  <Divider />
                  <a href='https://uqbar-network.gitbook.io/docs/uqbar-clearpaper/clearpaper'>CLEARPAPER</a>
                  <Divider />
                  <a href='https://uqbar.network/developers/zero-knowlegde'>ZK-ROLLUPS</a>
                  <Divider />
                  <a href='https://uqbar-network.gitbook.io/docs/'>DEV DOCS</a>
                </Entry>}
                {page == 'blog' && <Entry className='mt1' title='BLOG'>
                  <a href='https://uqbarnetwork.medium.com/the-uqbar-library-12e5beba6c81'>LIBRARY</a>
                  <Divider />
                  <a href='https://rss.com/podcasts/thenetworkage/'>PODCAST</a>
                </Entry>}
                {page == 'other' && <Entry className='mt1' title='OTHER'>
                  <a href='https://github.com/uqbar-dao'>GITHUB</a>
                  <Divider />
                  <Row>
                    <a>URBIT </a>
                      <CopyIcon text='~hocwyn-tipwex/uqbar-event-horizon-forever' />
                  </Row>
                </Entry>}
              </Col>

              <Col className='tabs'>
                <Row onClick={()=> setPage('general')} className={`tab ${classNames({ active: page == 'general' })}`}>GENERAL</Row>
                <Row onClick={()=> setPage('blog')} className={`tab ${classNames({ active: page == 'blog' })}`}>BLOG</Row>
                <Row onClick={()=> setPage('other')} className={`tab ${classNames({ active: page == 'other' })}`}>OTHER</Row>
              </Col>
            </Row>
            <Row between className='socials'> 
              <a href='https://discord.gg/G5VVqtjbVG'><FaDiscord /></a>
              <a href='https://github.com/uqbar-dao'><FaGithub /></a>
              <a href='https://twitter.com/uqbarnetwork'><FaTwitter /></a>
              <a href='https://uqbarnetwork.medium.com/'><FaMedium /></a>
              <a href='https://t.me/uqbarnetwork'><FaTelegram /></a>
            </Row>
          </Col>}
        </Row>

      </Container>
      
    </Col>

  )
}

export default Home