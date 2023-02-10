import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'

import './Pokur.scss'
import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaBars, FaDiscord, FaGithub, FaGripHorizontal, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import Entry from '../components/spacing/Entry'
import Divider from '../components/spacing/Divider'
import CopyIcon from '../components/text/CopyIcon'
import Link from '../components/nav/Link'
import Marquee from 'react-fast-marquee'
import logo from '../assets/img/Uqbar icon black.svg'

type Page = 'general' | 'blog' | 'other'

const Pokur = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  const texts = ['KUR']

  return (
    <>
     <Marquee className='pokured' gradient={false}> <Text> &nbsp;* CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY </Text> </Marquee>
      <Col className={classNames('pokur', { isMobile })}>
        <Navbar menuOpen={menuOpen} onToggle={onToggle} />
        <Container>
          <Row className={classNames('main', { isMobile })} between>
            <Col>
              <Col className={classNames('title', { isMobile })}>
                <Row className='untyped gold' style={{ width: '100%', fontSize: 256 }}>
                  <Text className='gold'>P</Text>
                  <img src={logo} />
                  <ReactTypingEffect 
                    className='typed gold'
                    cursorClassName='cursor'
                    text={texts}
                    speed={100}
                    eraseDelay={50000}
                    typingDelay={0}
                  />
                </Row>
              </Col>
              <Text className={classNames('sidecard', { isMobile })}>
                Uqbar is a {!isMobile && <br/> }
                one-stop coding environment {!isMobile && <br/>}
                that makes writing and {!isMobile && <br/>}
                deploying smart contracts {!isMobile && <br/>}
                simple, efficient, and secure. 
              </Text>
            </Col>
          </Row>

        </Container>
        
      </Col>
    </>

  )
}

export default Pokur
