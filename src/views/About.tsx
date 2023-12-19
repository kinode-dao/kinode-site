import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'

import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaArrowRight, FaBars, FaBolt, FaChevronDown, FaDiscord, FaGithub, FaGripHorizontal, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa'
import { isMobileCheck } from '../utils/dimensions'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import Link from '../components/nav/Link'
import Marquee from 'react-fast-marquee'
import tim from '../assets/img/tim.png'
import steve from '../assets/img/steve.png'

import './About.scss'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import Menu from '../components/Menu'

type Page = 'general' | 'apps' | 'blog' | 'other'

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()
  
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

  const featuredApps = {
    // pokur: { link: '/pokur', desc: 'Pokur is a fully decentralized Texas Hold’em simulator with built-in blockchain integration and social features, such as chat, tournaments, and leaderboards, running on the Uqbar testnet.' },
    escape: { link: 'https://uqbar-network.gitbook.io/uqbar/applications/escape', desc: 'EScape is a social management and DAO Tooling system. EScape provides a simple, intuitive, and unified interface for secure messaging, managing groups, receiving notifications, and interacting with other dApps.' },
    pongo: { link: 'https://uqbar-network.gitbook.io/uqbar/applications/pongo', desc: 'A peer-to-peer, crypto-enabled messaging client that provides a decentralized backend for Uqbar dApps requiring chat integration, offering unrivaled privacy, security, and anti-censorship guarantees.' },
  }

  const supportedFields = [
    'Web3 games',
    'Gambling',
    'Investing',
    'Social',
    'Finance',
    'NFT',
    'Productivity suites',
    'Content and Entertainment',
  ]

  const steps = [
    {title: 'Plan', desc: `identify the project or idea that would most benefit from building on Uqbar and matches the Ecosystem’s areas of focus`, },
    {title: 'Apply', desc: `fill out our simple form and we will respond to schedule an introductory call within 48 hours`, },
    {title: 'Meet the team', desc: `we will get to know each other, answer questions, and set expectations for a partnership`, },
    {title: 'Review', desc: `allow up to a week for us to consider the information from your application and introductory meeting and provide feedback`, },
    {title: 'Launch', desc: `we will devise a funding plan and agreement as to the specific nature of our partnership. Each project is different!`, },
    {title: 'Support', desc: `we provide necessary support and resources for your company to succeed and develop a success product`, },
  ]

  const ctaButton = <a className='cta-l' style={{marginTop: 48}} href='https://forms.gle/TkE6xh53wCrGEpXS6'>
    <Button className={classNames('cta', { isMobile })}>
      <Row style={{width: '100%', justifyContent:'center'}}>
        <Text>SIGN UP</Text>
        <FaArrowRight size={'1.5em'} style={{marginTop: '-4px', transform: 'rotate(-45deg)'}} />
      </Row>
    </Button>
  </a>

  const parallax = useRef<IParallax>(null)

  return (<Col className={classNames('about-container', { isMobile })}>
    <Col>
      <Row className='bg fill stars'></Row>
      <Row className='bg fill black'></Row>
      <Row className='bg fill stars2'></Row>
    </Col>
    <Marquee gradient={false}>
      <Text> &nbsp;* WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? * WHAT IS UQBAR? 
      </Text>
    </Marquee>
    <Col className={classNames('about', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} />
      <Container>
        <Row className={classNames('main', { isMobile })} between>
          {!isMobile ? <Text large>A<br/>B<br/>O<br/>U<br/>T</Text>
          : <Text large className='isMobile'>about</Text>}
          <Col className={classNames('title-container', { isMobile })}>
            <Col className={classNames('title', { isMobile })}>
              <Text className='untyped'>
                A LAUNCHPAD <br/> FOR HERPUSDERPUS
              </Text>
            </Col>
            <Text className={classNames('sidecard blued', { isMobile })}>
              <span className='blue'>Uqbar is a peer-to-peer OS</span> and application ecosystem with native blockchain and artificial intelligence integration. For devs, Uqbar provides a unified programming environment that radically simplifies the development and deployment of decentralized applications. For users, Uqbar provides a sovereign, powerful, bespoke web experience—the internet as it was meant to be.  
            </Text>
            {!isMobile && ctaButton}
          </Col>
          {isMobile && ctaButton}
          {!menuOpen && <Row className='the-portal'></Row>}
          {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
        </Row>
        <Row className={classNames('learn-more-socials', { isMobile })} between>
          <Button className='learn-more' onClick={() => parallax?.current?.scrollTo(1)}>
            <Row>
              <Text>LEARN MORE</Text>
              <FaChevronDown size={18} className='ml1 blue' />
            </Row>
          </Button>
          <Row className={classNames('socials', { isMobile })}>
            <a className='slim' target='_blank' href='https://github.com/uqbar-dao'>Github</a>
            <a className='slim' target='_blank' href='https://uqbarnetwork.medium.com/'>Medium</a>
            <a className='slim' target='_blank' href='https://twitter.com/uqbarnetwork'>Twitter</a>
            <a className='slim' target='_blank' href='https://t.me/uqbarnetwork'>Telegram</a>
            <a className='slim' target='_blank' href='https://discord.gg/G5VVqtjbVG'>Discord</a>
          </Row>
        </Row>
      </Container>
      <Container className={classNames('short', { isMobile })}>
        <Row between>
          <Col className='left-side mb1'>
            <Text className='title'>
              Global Consensus, <br/> 
              <span className='blue'>Local Compute</span>
            </Text>
          </Col>
          <Text className='right-side'>
            Uqbar combines the power of decentralized infrastructure with the security of sovereign computing. Execute smart contracts, run local AI, and message peers directly, all on a single integrated system. 
          </Text>
        </Row>
      </Container>
      <Container className={classNames('short', { isMobile })}>
        <Row between>
          <Col className='left-side mb1'>
            <Text className='title'>Public Cloud<br/><span className='orange'>Infrastructure</span></Text>
          </Col>
          <Text className='right-side'>
            Enjoy lightning quick cloud processing and data storage without corporate intermediaries. A high-bandwidth distributed network as powerful as AWS and secure as Ethereum. 
          </Text>
        </Row>
      </Container>
      <Container className={classNames('short', { isMobile })}>
        <Row between>
          <Col className='left-side mb1'>
            <Text className='title'>
              Portable, <br/>
              Scalable, <br/>
              <span className='blue'>Usable</span>
            </Text>
          </Col>
          <Text className='right-side'>
            Built on WASM modules, Uqbar is the first large-scale peer-to-peer network designed to be run on any machine by millions of users in dozens of programming languages. 
          </Text>
        </Row>
      </Container>
      <Container className={classNames('short', { isMobile })}>
        <Row between>
          <Col className='left-side mb1'>
            <Text className='title'>
              A <span className='orange'>Bespoke</span> <br/> 
              Internet <br/> 
              Experience
            </Text>
          </Col>
          <Text className='right-side'>
            Explore the internet from the safety of your personal node, customized for your web usage tendencies. Control your data, own your applications, design your perfect internet. 
          </Text>
        </Row>
      </Container>
      <Container className={classNames('short team', { isMobile })}>
        <Text className='title'>MEET THE TEAM</Text>
        <Row className='team-members'>
          <Col className='sidecard special blued team-member'>
            <img src={tim} />
            <Text className='subtitle blue'>
              Tim Galebach 
              <span className='orange bold ml1'>CEO</span>
            </Text>
            <Row className='desc teko'>
              Tim has over a decade of experience as a programmer, developer, and business leader. He has founded multiple successful web 3 companies and has served on the board of the Urbit Foundation, where he has dedicated himself to the project of building blockchain functionality into the Urbit stack.
            </Row>
          </Col>
          <Col className='sidecard special blued team-member'>
            <img src={steve} />
            <Text className='subtitle blue'>
              Steven Noble 
              <span className='orange bold ml1'>CFO</span>
            </Text>
            <Row className='desc teko'>
              Steve has over 10 years experience in venture capital and market making, having financed companies in sectors ranging from resource management to biotechnology, developing business models and management strategies. He also has extensive experience in business development for web 3, in particular launching ICOs and listing tokens on cryptocurrency exchanges. 
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className={classNames('short has-bgs', { isMobile })}>
        <Row className='bg fill ziggurat'></Row>
        <Row className={classNames('has-bgs-content', { isMobile })}>
          <Col>
            <Text className='title'>
              <span className='orange'>BUILD</span> ON UQBAR
            </Text>
            <Row className='sidecard special blued'>
              <Col className='left-side'>
                <Text className='subtitle blue'>Identity</Text>
              </Col>
              <Text className='desc teko'>
                NFT-backed PKI used for key-signing and encryption provide default identity network and reputation ecosystem that seamlessly composes between apps.
              </Text>
            </Row>
            <Row className='sidecard special blued'>
              <Col className='left-side'>
                <Text className='subtitle blue'>Networking</Text>
              </Col>
              <Text className='desc teko'>
                Built-in networking for all applications through Uqbar PKI and choice to act as direct or indirect node for package routing.
              </Text>
            </Row>
            <Row className='sidecard special blued'>
              <Col className='left-side'>
                <Text className='subtitle blue'>Data Persistence</Text>
              </Col>
              <Text className='desc teko'>
                Applications store data on user nodes, safeguarded by remote backups, and eliminating the need for complex server architecture while protecting user privacy and data.  
              </Text>
            </Row>
            <Row className='sidecard special blued'>
              <Col className='left-side'>
                <Text className='subtitle blue'>Blockchain</Text>
              </Col>
              <Text className='desc teko'>
                Default access to Ethereum L1 for all applications, and eventual integration with popular L2s.  
              </Text>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className={classNames('short', { isMobile })}>
        <Row between>
          <Col className='left-side'>
            <Text className='title mb1'>
              DOCUMENTATION
            </Text>
          </Col>
          <Row className={classNames('right-side sidecard blued blue-bg', { isMobile })}>
            <Row className='supported-field'>
              <FaBolt style={{ marginRight: '1em' }} />
              <a className='teko'>Introduction <FaArrowRight style={{ transform: 'rotate(-45deg)', fontSize: 12, color: 'black' }} /> </a>
            </Row>
            <Row className='supported-field'>
              <FaBolt style={{ marginRight: '1em' }} />
              <a className='teko'>Quick Start <FaArrowRight style={{ transform: 'rotate(-45deg)', fontSize: 12, color: 'black' }} /> </a>
            </Row>
            <Row className='supported-field'>
              <FaBolt style={{ marginRight: '1em' }} />
              <a className='teko'>Set Up Dev Environment <FaArrowRight style={{ transform: 'rotate(-45deg)', fontSize: 12, color: 'black' }} /> </a>
            </Row>
            <Row className='supported-field'>
              <FaBolt style={{ marginRight: '1em' }} />
              <a className='teko'>App Tutorial <FaArrowRight style={{ transform: 'rotate(-45deg)', fontSize: 12, color: 'black' }} /> </a>
            </Row>
          </Row>
        </Row>
      </Container>
      <Container className={classNames('short', { isMobile })}>
        <Row between>
          <Col className='left-side'>
            <Text className='title mb1'>
              GET <span className='orange'>INVOLVED</span>
            </Text>
            <Text className='teko'>
              Uqbar will soon release its beta development platform. To gain early access, and receive updates on Uqbar's development, sign up for our waitlist. 
            </Text>
          </Col>
          <Col className='right-side'>
            {ctaButton}
          </Col>
        </Row>
      </Container>
    </Col>
  </Col>)
}

export default About