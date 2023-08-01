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
import Marquee from 'react-fast-marquee'
import Menu from '../components/Menu'


export type Page = 'general' | 'apps' | 'blog' | 'other'

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

  return (<Col className='home-container'>
    <Marquee gradient={false}>
      <Text> &nbsp;* WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY 
      </Text>
    </Marquee>
    <Col className={classNames('home', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} />
      <Container>
        <Row className={classNames('main', { isMobile })} between>
          <Col>
            <Col className={classNames('title', { isMobile })}>
              <Text className='untyped'>
                A CODING <br/>
                ENVIRONMENT <br/> FOR&nbsp;
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
          {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
        </Row>
      </Container>
    </Col>
  </Col>)
}

export default Home