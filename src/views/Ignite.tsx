import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'

import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaArrowRight, FaBars, FaBolt, FaChevronDown, FaDiscord, FaGithub, FaGripHorizontal, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa'
import { isMobileCheck } from '../utils/dimensions'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import Entry from '../components/spacing/Entry'
import Divider from '../components/spacing/Divider'
import CopyIcon from '../components/text/CopyIcon'
import Link from '../components/nav/Link'
import Marquee from 'react-fast-marquee'
import zigss from '../assets/img/zig-ss.png'
import mars from '../assets/img/mars-set-solar-system-planets-rendered-3d-elements-this-image-furnished-by-nasa 1.png'
import mars2 from '../assets/img/mars-set-solar-system-planets-rendered-3d-elements-this-image-furnished-by-nasa 1 1.png'
import dunes from '../assets/img/bg 1.png'
import { animateScroll as scroll } from 'react-scroll'

import './Ignite.scss'

type Page = 'general' | 'apps' | 'blog' | 'other'

const Ignite  = () => {
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
      pokur: { link: '/pokur', desc: 'Pokur is a fully decentralized Texas Hold’em simulator with built-in blockchain integration and social features, such as chat, tournaments, and leaderboards, running on the Uqbar testnet.' },
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


  return (<Col className={classNames('ignite-container', { isMobile })}>
    <Row className='bg fill stars'></Row>
    <Row className='bg fill stars2'></Row>
    <Row className='bg fill black'></Row>
    <img src={mars} className='bg mars'></img>
    {isMobile ? <Row className='bg fill dunes2' />
    : <img src={dunes} className='bg fill dunes'></img>}
    <Marquee gradient={false}>
      <Text> &nbsp;* DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY * DAPPS MADE EASY 
      </Text>
    </Marquee>
    <Col className={classNames('ignite', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} />
      <Container>
        <Row className={classNames('main', { isMobile })} between>
          {!isMobile ? <Text large>I<br/>G<br/>N<br/>I<br/>T<br/>E</Text>
          : <Text large className='isMobile'>IGNITE</Text>}
          <Col className={classNames('title-container', { isMobile })}>
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
          {menuOpen && <Col className={classNames('ignite-menu mr1', { isMobile, menuOpen })}>
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
                  <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/pongo'>PONGO</a>
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
        <Row className={classNames('learn-more-socials', { isMobile })} between>
          <Button className='learn-more' onClick={() => scroll.scrollMore(window.innerHeight)}>
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
            <Text className='title'><span className='orange'>IGNITE</span> <br/> INVESTMENT <br/> THESIS</Text>
          </Col>
          <Text className='right-side'>
            Now is the right time to invest in Web3—but only Uqbar 
            network boasts the features necessary to make complex,
              decentralized, networked applications a reality. <span className='blue'> More coming soon. </span>
            </Text>
        </Row>
      </Container>
      <Container className={classNames('short', { isMobile })}>
        <Row between>
          <Col className='left-side mb1'>
            <Text className='title'>WHAT IS <br/><span className='orange'>UQBAR</span>?</Text>
            {/* <a className='slim mt1' style={{ fontSize: 16, borderBottom:'2px solid'}} target='_blank' href='https://uqbar-network.gitbook.io/uqbar/'>
              <Text>READ MORE</Text>
              <FaArrowRight size={18} className='ml1 blue' style={{transform: 'rotate(-45deg)'}} />
            </a> */}
          </Col>
          <Text className='right-side'>
            Uqbar is a coding environment and zero-knowledge rollup to the 
            Ethereum network built atop <Link className='blue' external target='_blank' href='https://uqbar-network.gitbook.io/uqbar/uqbar-and-urbit/what-is-urbit'>Urbit</Link>, a peer-to-peer network and 
            decentralized SDK. Uqbar provides a unified on- and off-chain 
            execution environment that seamlessly integrates everyday social 
            and asset management tools with powerful distributed consensus 
            mechanisms and one-click application deployment. Read 
            more <Link className='blue' external target='_blank' href='https://uqbar-network.gitbook.io/uqbar/'>here</Link>. 
          </Text>
        </Row>
      </Container>
      <Container className={classNames('short', { isMobile })}>
        <Row between>
          <Col className='left-side'>
            <Text className='title mb1'>THE UQBAR <br/> <span className='orange'>DEVELOPMENT</span> SUITE</Text>
            <Text className='teko' style={{marginRight: isMobile ? 0 : 80, marginBottom: isMobile ? 24 : 0}}>
              The Uqbar Development Suite is an all-in-one tool kit
              for the creation and deployment of smart contracts and
              dApps. The suite includes a built-in digital asset wallet,
              block explorer, and integrated development environment that
              easily unifies on- and off-chain execution. Best of
              all, every Uqbar dApps is written in a single functional 
              language, Hoon, which can be used for both back- and
              front-end development as well as application deployment. 
              For a guide to writing applications on Uqbar, read
              more <Link className='blue' external target='_blank' href='https://uqbar-network.gitbook.io/dev-docs/developer-documentation/overview'>here</Link>.
            </Text>
          </Col>
          <Col className='right-side'>
            <img src={zigss} style={{maxWidth: '100%', borderTopLeftRadius: isMobile ? 8 : 24, borderTopRightRadius: isMobile ? 8 : 24}} />
          </Col>
        </Row>
      </Container>
      <Container className={classNames('short has-bgs', { isMobile })}>
        {/* <Row className='bg fill stars'></Row>
        <Row className='bg fill stars2'></Row>
        <Row className='bg fill black'></Row> */}
        <img src={mars2} className='bg mars2'></img>
        <Row className='bg fill ziggurat'></Row>
        <Row className={classNames('has-bgs-content', { isMobile })}>
          <Col>
            <Text className='title'>
              FEATURED <span className='orange'>APPLICATIONS</span>
            </Text>
            {Object.entries(featuredApps).map(([title, { link, desc }]) => <Row key={title} className='sidecard special blued'>
              <Col className='left-side'>
                <Text className='subtitle blue'>{title}</Text>
                <a className='slim mt1' style={{ fontSize: 14, }} target='_blank' href={link}>
                  <Text>READ MORE</Text>
                  <FaArrowRight size={18} className='ml1 blue' style={{transform: 'rotate(-45deg)'}} />
                </a>
              </Col>
              <Text className='desc teko'>{desc}</Text>
            </Row>)}
          </Col>
        </Row>
      </Container>
      <Container className={classNames('short', { isMobile })}>
        <Row between>
          <Col className='left-side'>
            <Text className='title mb1'>LAUNCH <br/>
              YOUR <span className='orange'>DAPP</span> 
            </Text>
            <Text className='teko' style={{marginRight: isMobile ? 0 : 80, marginBottom: isMobile ? 24 : 0}}>
              Uqbar Ignite is interested in identifying and supporting projects
              ideally suited to develop on the Uqbar network. The optimal 
              candidates have an ambitious, experienced team and are developing
              applications that would leverage Uqbar’s unique unified on- and 
              off-chain execution environment. In particular, we are interested 
              in supporting companies developing products in the following 
              fields: 
            </Text>
          </Col>
          <Row className={classNames('right-side sidecard blued blue-bg', { isMobile })}>
            {supportedFields.map((field, i) => <Row key={i} className='supported-field'>
              <FaBolt style={{ marginRight: '1em' }} />
              <Text className='teko'>{field}</Text>
            </Row>)}
          </Row>
        </Row>
      </Container>
      <Container className={classNames('short process', { isMobile })}>
        <Text className='title'>APPLICATION PROCESS</Text>
        <Row className='steps'>
          {steps.map(({ title, desc }, i, arr) => <Row key={i} className='sidecard special blued step'>
            <Col className='left-side'>
              <Text className='subtitle blue'>{title}</Text>
              <Text className='ps2p mt1' style={{fontSize: 14}}>0{i+1} / 0{arr.length}</Text>
            </Col>
            <Text className='desc teko'>{desc}</Text>
          </Row>)}
        </Row>
      </Container>
      <a className='cta-l' href='https://forms.gle/TkE6xh53wCrGEpXS6'>
        <Button className={classNames('cta', { isMobile })}>
          <Row style={{}}>
            <Text>LAUNCH NOW</Text>
            <FaArrowRight size={'1.5em'} style={{marginTop: '-8px', transform: 'rotate(-45deg)'}} />
          </Row>
        </Button>
      </a>
    </Col>
  </Col>)
}

export default Ignite
