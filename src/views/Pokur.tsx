import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'
import TypewriterComponent from 'typewriter-effect'
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

  const cardTexts = [{
      card: 'WHY <br/> POKUR?',
      text: `While other platforms allow gambling with cryptocurrency, their centralized front-end makes them vulnerable to cyber attacks and government regulation. 
      <br/><br/>
      Pokur is the first crypto gaming application to run on a fully-distributed peer-to-peer network.`,
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

  const strings = ['FROM UQBAR', 'FOR DEGENS', 'WITHOUT LIMITS', 'BY DEGENS']

  return (
    <>
     <Marquee className='pokured' gradient={false}> <Text>&nbsp; * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY * CRYPTO POKER MADE EASY</Text> </Marquee>
      <Col className={classNames('pokur', { isMobile })}>
        <Navbar pokur menuOpen={menuOpen} onToggle={onToggle} />
        <Container className={classNames({ isMobile })}>
          <Row className={classNames('main', { isMobile })}>
            <Col className={classNames('submain', { isMobile })}>
              <Row className='cards'>
                <img className='cfront' src={cardfront} />
                <img className='cback' src={cardback} />
              </Row>
              <Col className={classNames('title', { isMobile })}>
                <Col className={classNames('gold subtitle', { isMobile })}>
                  <Text className='untyped'>A HOLD'EM EXPERIENCE&nbsp;</Text>
                  <TypewriterComponent options={{ strings, cursorClassName:'cursor', wrapperClassName:'typed', loop: true, autoStart: true, delay: 100 }} />
                </Col>
              </Col> 
            </Col>
          </Row>
          <Row className='mt1' style={{height: '20vh'}}>
            <Text className={classNames('sidecard', { isMobile })}>
              The first fully-decentralized platform for crypto Texas Hold’em. 
            </Text>
            <Link external href='https://forms.gle/GGRTECQrVVV2z2ZE9' className={classNames('cta-l', { isMobile })}>
              <Button className={classNames('cta', { isMobile })}>
                <Row>
                  GRAB A SEAT
                  <FaChevronRight />
                </Row>
              </Button>
            </Link>
          </Row>
        </Container>
        <Button icon={top ? <FaChevronUp style={{ fontSize: 'large' }} /> : <FaChevronDown style={{ fontSize: 'large' }} />} 
        style={{ position: 'fixed', bottom: 8, right: 8, zIndex: 5, background: 'white'}} onClick={() => {
          if (top) {
            scroll.scrollToTop()
            setTop(false)
          } else {
            const ourHeight = window.innerHeight
            scroll.scrollMore(ourHeight)
            setTop(true)
          }
        }} />
        {!isMobile && <Row className={classNames({ isMobile })} style={{justifyContent:'center', marginBottom: 128}}>
          {cardTexts.map((card, i) => <Col className={classNames('flip-card', { isMobile })} key={i}>
            <Col className='flip-card-inner'>
              <Col className='flip-card-front'>
                <img src={cardimg} />
                <Text dangerouslySetInnerHTML={{ __html: card.card }}></Text>
                <Text style={{position:'absolute', bottom: 32, right: 48}}><FaRedo/></Text>
              </Col>
              <Col className='flip-card-back'>
                <img src={cardimg} style={{visibility:'hidden'}} />
                <Text dangerouslySetInnerHTML={{ __html: card.text }}></Text>
                <Button className='grab'>
                  <Link href='https://forms.gle/GGRTECQrVVV2z2ZE9' external>GRAB A SEAT <FaChevronRight />
                  </Link></Button>
              </Col>
            </Col>
          </Col>)}
        </Row>}
        {isMobile && cardTexts.map((card, i) => <Row key={i} className={classNames({ isMobile })} style={{justifyContent:'center'}}>
          <Col className={classNames('flip-card', { isMobile })}>
            <Col className='flip-card-inner'>
              <Col className='flip-card-front'>
                <img src={cardimg} />
                <Text dangerouslySetInnerHTML={{ __html: card.card }}></Text>
                <Text style={{position:'absolute', bottom: 48, right: '45%' }}><FaRedo/></Text>
              </Col>
              <Col className='flip-card-back'>
                <img src={cardimg} style={{visibility:'hidden'}} />
                <Text dangerouslySetInnerHTML={{ __html: card.text }}></Text>
                <Button className='grab'>
                  <Link href='https://forms.gle/GGRTECQrVVV2z2ZE9' external>GRAB A SEAT <FaChevronRight />
                  </Link></Button>
              </Col>
            </Col>
          </Col>
        </Row>)}
        <Link className='cta-l' external href='https://forms.gle/GGRTECQrVVV2z2ZE9' style={{ display: 'flex', justifyContent: 'center' }}>
          <Button className={classNames('cta', { isMobile })} style={{ fontSize: isMobile? 24 : 48, padding: isMobile ? 16: 32}}>
            <Row>
              GRAB A {isMobile && <br/> }SEAT NOW
              <FaChevronRight style={{ marginLeft: 16 }} />
            </Row>
          </Button>
        </Link>
      </Col>
    </>

  )
}

export default Pokur
