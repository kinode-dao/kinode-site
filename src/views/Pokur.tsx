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
import Entry from '../components/spacing/Entry'
import Divider from '../components/spacing/Divider'
import CopyIcon from '../components/text/CopyIcon'
import Link from '../components/nav/Link'
import { animateScroll as scroll } from 'react-scroll'
import Marquee from 'react-fast-marquee'
import logo from '../assets/img/Uqbar icon black.svg'
import cardimg from '../assets/img/card.png'

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
      card: 'Why <br/> Pokur?',
      text: 'While other platforms allow gambling with cryptocurrency, their centralized front-end makes them vulnerable to cyber attacks and government regulation. Centralized crypto gaming platforms may also arbitrarily ban users or lock them out of their funds without explanation. Because Pokur is the first crypto gaming application to run on a fully-distributed peer-to-peer network, it offers a unique level of privacy and security. No one can kick you off Pokur. No one can monitor your private transactions. And, because the code is open-source and built for composability, smart contract developers may easily upgrade Pokur with custom features without compromising security.',
    }, {
      card: 'How it <br/> Works',
      text: 'Pokur is built atop Urbit, a secure peer-to-peer network and clean-slate operating system. Urbit is an attempt to rebuild the internet with an emphasis on user sovereignty. Uqbar is Urbit’s first native blockchain and smart contract platform. Uqbar provides programmers a unique execution environment that seamlessly unifies on- and off-chain data, allowing developers to build complex dApps that combine blockchain transactions with more traditional web elements, such as social graphs and messaging. Pokur is just the first example of such an application. While crypto gambling is fun, Pokur is most significant as an illustration of the types of functional, innovative, three-dimensional dApps that are now possible to build with Uqbar.',
    }, {
      card: 'Grab <br/> a Seat',
      text: 'Players may access Pokur by joining the Urbit network. You can sign up for free Urbit hosting from our partner, Chorus One. Once you’re on the network, feel free to explore other Urbit applications, including EScape, our social platform, and the Uqbar Development Suite, our smart contract programming environment.',
    }, 
  ]

  return (
    <>
     <Marquee className='pokured' gradient={false}> <Text> &nbsp; * &nbsp; CRYPTO &nbsp; POKER &nbsp; MADE &nbsp; EASY &nbsp; * &nbsp; CRYPTO &nbsp; POKER &nbsp; MADE &nbsp; EASY &nbsp; * &nbsp; CRYPTO &nbsp; POKER &nbsp; MADE &nbsp; EASY &nbsp; * &nbsp; CRYPTO &nbsp; POKER &nbsp; MADE &nbsp; EASY &nbsp; * &nbsp; CRYPTO &nbsp; POKER &nbsp; MADE &nbsp; EASY &nbsp; * &nbsp; CRYPTO &nbsp; POKER &nbsp; MADE &nbsp; EASY &nbsp; * &nbsp; CRYPTO &nbsp; POKER &nbsp; MADE &nbsp; EASY</Text> </Marquee>
      <Col className={classNames('pokur', { isMobile })}>
        <Navbar pokur menuOpen={menuOpen} onToggle={onToggle} />
        <Container>
          <Row className={classNames('main', { isMobile })} style={{justifyContent:'center'}}>
            <Col>
              <Col className={classNames('title', { isMobile })}>
                <div className='cards' />
                <Row className='untyped gold'>
                  <Text className='gold'>P</Text>
                  <img className='invert' src={logo} />
                  <ReactTypingEffect 
                    className='typed gold'
                    cursorClassName='cursor'
                    text={texts}
                    speed={100}
                    eraseDelay={50000}
                    typingDelay={0}
                  />
                </Row>
                <Text small className='gold'>a &nbsp; hold'em</Text>
                <Text small className='gold'>experience</Text>
                <Text small className='gold'>from &nbsp; uqbar</Text>
              </Col>
              <Text className={classNames('sidecard', { isMobile })}>
              The first fully-decentralized platform for cryptocurrency Texas Hold’em. 
              {/* Built atop a distributed peer-to-peer network that guarantees security, privacy, and censorship resistance for both gameplay and native social components, such as in-game chat.  */}
              </Text>
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
        {cardTexts.map((card, i) => <Container key={i} className='segmentum' style={{justifyContent:'center', backgroundColor: i % 2 === 1 ? '#cfc09faa' : '#ffffddaa'}}>
          <Row className={classNames('main', { isMobile })} style={{justifyContent:'center'}}>
            <Col className='flip-card'>
              <Col className='flip-card-inner'>
                <Col className='flip-card-front'>
                  <img src={cardimg} />
                  <Text dangerouslySetInnerHTML={{ __html: card.card }}></Text>
                  <Text style={{position:'absolute', bottom: 16, right: 48}}><FaRedo/></Text>
                </Col>
                <Col className='flip-card-back'>
                  <Text dangerouslySetInnerHTML={{ __html: card.text }}></Text>
                  <Button className='grab'>Grab &nbsp; a &nbsp; Seat &nbsp; <FaChevronRight style={{fontSize:'medium'}} /></Button>
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
