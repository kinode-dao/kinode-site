import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import TypewriterComponent from 'typewriter-effect'
import './Pokur.scss'
import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaChevronDown, FaChevronRight, FaChevronUp, FaCircleArrowRight, } from 'react-icons/fa6'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import { animateScroll as scroll } from 'react-scroll'
import Marquee from 'react-fast-marquee'
import cardimg from '../assets/img/card.png'
import cardback from '../assets/img/cardback.png'
import cardfront from '../assets/img/cardfront.png'
import Link from '../components/nav/Link'

const Pokur = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [top, setTop] = useState(false)

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()
  const ctaButton = <Link external href='https://forms.gle/GGRTECQrVVV2z2ZE9' className={classNames('cta-l', { isMobile })}>
    <Button className={classNames('cta', { isMobile })}>
      <Row>
        JOIN A TABLE
        <FaChevronRight />
      </Row>
    </Button>
  </Link>

  const cardTexts = [{
    card: '100% PRIVATE AND SECURE',
    text: `Pokur is the first crypto gaming application to run on a fully-distributed peer-to-peer network, offering unique levels of privacy, security, and censorship resistance for both gaming and socializing. `,
    cta: <Link external href='https://forms.gle/GGRTECQrVVV2z2ZE9'>
      <Button className={classNames('grab', { isMobile })}>JOIN A TABLE</Button></Link>
  }, {
    card: 'INNOVATIVE ARCHITECTURE',
    text: `Uqbar’s seamless on- and off-chain execution environment natively integrates chat, payments, and gaming atop the unique p2p infrastructure provided by the Urbit SDK.`,
    cta: <Link href='https://uqbar-network.gitbook.io/uqbar-clearpaper/' target='_blank' external>
      <Button className={classNames('grab', { isMobile })}>UQBAR CLEARPAPER</Button></Link>,
  }, {
    card: 'PROOF OF VALUE',
    text: `Pokur demonstrates the power of Uqbar’s composable infrastructure to produce blockchain-enhanced, p2p dApps that feature seamless integration across multiple applications.`,
    cta: <Link href='https://urbit.org/organizations/uqbar' external>
      <Button className={classNames('grab', { isMobile })}>MORE UQBAR DAPPS</Button></Link>
  },
  ]

  const strings = [
    'WITHOUT LIMITS',
    'FOR DEGENS',
    'BY UQBAR',
    'FROM THE FUTURE',
    'ON CHAIN',
    'FOR VISIONARIES',
    'FOR WINNERS',
  ]

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
                  <TypewriterComponent options={{ strings, cursorClassName: 'cursor', wrapperClassName: 'typed', loop: true, autoStart: true, delay: 100 }} />
                </Col>
              </Col>
            </Col>
          </Row>
          <Row className='mt1' style={{ height: '20vh', marginTop: 'auto', marginBottom: 'auto' }}>
            <Text className={classNames('sidecard', { isMobile })}>
              THE FIRST FULLY-DECENTRALIZED PLATFORM FOR CRYPTO TEXAS HOLD’EM.
            </Text>
            {ctaButton}
          </Row>
        </Container>
        <Button icon={top ? <FaChevronUp style={{ fontSize: 'large' }} /> : <FaChevronDown style={{ fontSize: 'large' }} />}
          style={{ position: 'fixed', bottom: 8, right: 8, zIndex: 5, background: 'white' }} onClick={() => {
            if (top) {
              scroll.scrollToTop()
              setTop(false)
            } else {
              const ourHeight = window.innerHeight
              scroll.scrollMore(ourHeight)
              setTop(true)
            }
          }} />
        {!isMobile && <Row className={classNames({ isMobile })} style={{ justifyContent: 'center', marginBottom: 128 }}>
          {cardTexts.map((card, i) => <Col className={classNames('flip-card', { isMobile })} key={i}>
            <Col className='flip-card-inner'>
              <img src={cardimg} style={{ visibility: 'hidden' }} />
              <Col className='flip-card-front'>
                <img src={cardimg} />
                <Text style={{ fontSize: i === 1 ? 18 : 32 }} dangerouslySetInnerHTML={{ __html: card.card }}></Text>
                <Text style={{ position: 'absolute', bottom: 32, right: 48 }}><FaCircleArrowRight /></Text>
              </Col>
              <Col className='flip-card-back'>
                <img src={cardimg} style={{ visibility: 'hidden' }} />
                <Text dangerouslySetInnerHTML={{ __html: card.text }}></Text>
                {card.cta}
              </Col>
            </Col>
          </Col>)}
        </Row>}
        {isMobile && cardTexts.map((card, i) => <Row key={i} className={classNames({ isMobile })} style={{ justifyContent: 'center' }}>
          <Col className={classNames('flip-card', { isMobile })}>
            <Col className='flip-card-inner'>
              <img src={cardimg} style={{ visibility: 'hidden' }} />
              <Col className='flip-card-front' >
                <img src={cardimg} />
                <Text style={{ fontSize: i === 1 ? 18 : 32 }} dangerouslySetInnerHTML={{ __html: card.card }}></Text>
                <Text style={{ position: 'absolute', bottom: 48 }}><FaCircleArrowRight /></Text>
              </Col>
              <Col className='flip-card-back'>
                <img src={cardimg} style={{ visibility: 'hidden' }} />
                <Text dangerouslySetInnerHTML={{ __html: card.text }}></Text>
                {card.cta}
              </Col>
            </Col>
          </Col>
        </Row>)}
        <Link className='cta-l' external href='https://forms.gle/GGRTECQrVVV2z2ZE9' style={{ display: 'flex', justifyContent: 'center' }}>
          <Button className={classNames('cta', { isMobile })} style={{ fontSize: isMobile ? 24 : 48, padding: isMobile ? 16 : 32 }}>
            <Row>
              JOIN A {isMobile && <br />}TABLE
              <FaChevronRight style={{ marginLeft: 16 }} />
            </Row>
          </Button>
        </Link>
      </Col>
    </>

  )
}

export default Pokur
