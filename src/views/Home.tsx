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
import Link from '../components/nav/Link'

type Page = 'general' | 'blog' | 'other'

const Home  = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  const funnyTypedTexts = ['DAOS', 'SECRETS', 'SOCIETIES', 'CULTS', 'CHADS']
  const srsTypedTexts = ['WEB3 APPS', 'CITIES']
  const texts = funnyTypedTexts.flatMap((f, i) => (i % 2 == 0) ? [srsTypedTexts[0],f] : (i % 3 == 0) ? [srsTypedTexts[1], f] : f)

  return (
    <Col className='home'>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} />
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
                  text={texts}
                  speed={100}
                  eraseDelay={5000}
                  typingDelay={0}
                />
              </Text>
            </Col>
            <Text className={classNames('sidecard', { isMobile })}>
              Uqbar is a {!isMobile && <br/> }
              one-stop coding environment {!isMobile && <br/>}
              that makes writing and {!isMobile && <br/>}
              deploying smart contracts {!isMobile && <br/>}
              simple, efficient, and secure. 
            </Text>
          </Col>
          {menuOpen && <Col className={classNames('home-menu mr1', { isMobile, menuOpen })}>
            <div className='overlay' onClick={onToggle}></div>
            <Row between className='book'>

              <Col className='page'>
                {page == 'general' && <Entry className='mt1' title='GENERAL'>
                  <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/'>WHAT IS UQBAR</a>
                  <Divider />
                  <a target='_blank' href='https://uqbar-network.gitbook.io/docs/uqbar-clearpaper/clearpaper'>CLEARPAPER</a>
                  <Divider />
                  <a target='_blank' href='https://uqbarnetwork.medium.com/zk-execution-and-uqbar-a8f49784155e'>ZK-ROLLUPS</a>
                  <Divider />
                  <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/developer-documentation/developer-documentation'>DEV DOCS</a>
                </Entry>}
                {page == 'blog' && <Entry className='mt1' title='CONTENT'>
                  <a target='_blank' href='https://mirror.xyz/0xE030ad9751Ca3d90D4E69e221E818b41146c2129'>Blog</a>
                  <Divider />
                  <a target='_blank' href='https://uqbarnetwork.medium.com/the-uqbar-library-12e5beba6c81'>LIBRARY</a>
                  <Divider />
                  <a target='_blank' href='https://www.youtube.com/channel/UC1Mb7Y7Yytdw9LOmUFdEKbA'>Team Interviews</a>
                  <Divider />
                  <Link href='/age'>Network Age <br/> Podcast</Link>
                </Entry>}
                {page == 'other' && <Entry className='mt1' title='OTHER'>
                  <a target='_blank' href='https://github.com/uqbar-dao'>GITHUB</a>
                  <Divider />
                  <Row>
                    <a>URBIT </a>
                      <CopyIcon text='~hocwyn-tipwex/uqbar-event-horizon-forever' />
                  </Row>
                </Entry>}
              </Col>

              <Col className='tabs'>
                <Row onClick={()=> setPage('general')} className={`tab ${classNames({ active: page == 'general' })}`}>GENERAL</Row>
                <Row onClick={()=> setPage('blog')} className={`tab ${classNames({ active: page == 'blog' })}`}>Content</Row>
                <Row onClick={()=> setPage('other')} className={`tab ${classNames({ active: page == 'other' })}`}>OTHER</Row>
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
      
    </Col>

  )
}

export default Home
