import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'

import './Pokur.scss'
import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaBars, FaChevronDown, FaChevronRight, FaChevronUp, FaDiscord, FaGithub, FaGripHorizontal, FaMedium, FaRedo, FaRedoAlt, FaTelegram, FaTwitter } from 'react-icons/fa'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import { animateScroll as scroll } from 'react-scroll'
import Marquee from 'react-fast-marquee'
import logo from '../assets/img/uqbar-redwyt.png'
import cardimg from '../assets/img/card.png'
import cardback from '../assets/img/cardback.png'
import cardfront from '../assets/img/cardfront.png'
import { useNavigate } from 'react-router-dom'
import Link from '../components/nav/Link'

type Page = 'general' | 'blog' | 'other'

const Pokur = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [top, setTop] = useState(false)

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  const texts = ['KUR']
  const cardTexts = [{
      card: 'WHY <br/> POKUR?',
      text: `While other platforms allow gambling with cryptocurrency, their centralized front-end makes them vulnerable to cyber attacks and government regulation. 
      <br/><br/>
      Pokur is the first crypto gaming application to run on a fully-distributed peer-to-peer network. It offers a unique level of privacy and security.`,
    }, {
      card: 'HOW IT <br/> WORKS',
      text: `Pokur is built atop Urbit, a secure peer-to-peer network and clean-slate operating system. 
      <br/> <br/>
      Uqbar is Urbit’s first native blockchain and smart contract platform. `,
    }, {
      card: 'GRAB <br/> A SEAT',
      text: `Players may access Pokur by joining the Urbit network.
      <br/> <br/> You can sign up for free Urbit hosting from our partner, Chorus One.`
    }, 
  ]

  return (
    <>
     <Marquee className='pokured' gradient={false}> <Text>&nbsp; * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY</Text> </Marquee>
      <Col className={classNames('pokur', { isMobile })}>
        <Navbar pokur menuOpen={menuOpen} onToggle={onToggle} />
        <Container>
          <Row className={classNames('main', { isMobile })} style={{justifyContent:'center'}}>
            <Col style={{ flexGrow: 1, alignItems: 'center', }}>
              <Col className={classNames('title', { isMobile })}>
                <Row style={{justifyContent:'center'}} className='cards'>
                  <img className='cfront' src={cardfront} />
                  <img className='cback' src={cardback} />
                </Row>
                <Row className='untyped gold'>
                  <Text className='gold'>P</Text>
                  <img src={logo} />
                  <ReactTypingEffect 
                    className='typed gold'
                    cursorClassName='cursor'
                    text={texts}
                    speed={100}
                    eraseDelay={4000}
                    typingDelay={0}
                  />
                </Row>
                {!isMobile && <>
                  <Text small className='gold'>A HOLD'EM EXPERIENCE </Text>
                  <Text small className='gold'>FROM UQBAR</Text>
                </>}
                {isMobile && <>
                  <Text small className='gold'>A HOLD'EM</Text>
                  <Text small className='gold'>EXPERIENCE</Text>
                  <Text small className='gold'>FROM UQBAR</Text>
                </>}
              </Col>
              <Row>
                <Text className={classNames('sidecard', { isMobile })}>
                The first fully-decentralized platform for crypto Texas Hold’em. 
                </Text>
                {!isMobile && <Text className='sidecard' style={{ marginLeft: 16}}>
                  Built on a network that guarantees security, privacy, and censorship resistance.
                </Text>}
              </Row>
            </Col>
          </Row>
        </Container>
        <Button icon={top ? <FaChevronUp style={{ fontSize: 'large' }} /> : <FaChevronDown style={{ fontSize: 'large' }} />} 
        style={{ position: 'fixed', bottom: 8, right: 8, zIndex: 5}} onClick={() => {
          if (top) {
            scroll.scrollToTop()
            setTop(false)
          } else {
            const ourHeight = window.innerHeight
            scroll.scrollMore(ourHeight)
            setTop(true)
          }
        }} />
        {!isMobile && <Container className='segmentum'>
          <Row className={classNames({ isMobile })} style={{justifyContent:'center'}}>
            {cardTexts.map((card, i) => <Col className='flip-card' key={i}>
              <Col className='flip-card-inner'>
                <Col className='flip-card-front'>
                  <img src={cardimg} />
                  <Text dangerouslySetInnerHTML={{ __html: card.card }}></Text>
                  <Text style={{position:'absolute', bottom: 32, right: 48}}><FaRedo/></Text>
                </Col>
                <Col className='flip-card-back'>
                  <Text dangerouslySetInnerHTML={{ __html: card.text }}></Text>
                  <Button className='grab'>
                    <Link href='https://forms.gle/GGRTECQrVVV2z2ZE9' external>Grab a Seat <FaChevronRight style={{fontSize:'medium'}} />
                    </Link></Button>
                </Col>
              </Col>
            </Col>)}
          </Row>
        </Container>}
        {isMobile && cardTexts.map((card, i) => <Container key={i} className='isMobile segmentum' style={{justifyContent:'center', backgroundColor: i % 2 === 1 ? '#cfc09faa' : '#ffffddaa'}}>
          <Row className={classNames({ isMobile })} style={{justifyContent:'center'}}>
            <Col className='flip-card'>
              <Col className='flip-card-inner'>
                <Col className='flip-card-front'>
                  <img src={cardimg} />
                  <Text dangerouslySetInnerHTML={{ __html: card.card }}></Text>
                  <Text style={{position:'absolute', bottom: 48, right: '45%' }}><FaRedo/></Text>
                </Col>
                <Col className='flip-card-back'>
                  <Text dangerouslySetInnerHTML={{ __html: card.text }}></Text>
                  <Button className='grab'>
                    <Link href='https://forms.gle/GGRTECQrVVV2z2ZE9' external>Grab a Seat <FaChevronRight style={{fontSize:'medium'}} />
                    </Link></Button>
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>)}
      </Col>
    </>

  )
}

export default Pokur
