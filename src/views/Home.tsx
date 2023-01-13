import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'

import './Home.scss'
import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaArrowRight, FaBars, FaCoins, FaDiscord, FaGithub, FaGripHorizontal, FaMedium, FaMoon, FaQuestionCircle, FaStore, FaTelegram, FaTwitter } from 'react-icons/fa'
import HomeMenu from '../components/phonebook/HomeMenu'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import Entry from '../components/spacing/Entry'
import Divider from '../components/spacing/Divider'
import CopyIcon from '../components/text/CopyIcon'
import Link from '../components/nav/Link'
import Marquee from 'react-fast-marquee'
import Card from '../components/page/Card'


type Page = 'general' | 'blog' | 'other'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  const funnyTypedTexts = ['DAOS', 'SECRETS', 'SOCIETIES', 'CULTS', 'CHADS']
  const srsTypedTexts = ['WEB3 APPS', 'CITIES']
  const texts = funnyTypedTexts.flatMap((f, i) => (i % 2 == 0) ? [srsTypedTexts[0],f] : (i % 3 == 0) ? [srsTypedTexts[1], f] : f)

  const featuredIntegrations = [
    { icon: <FaCoins />, name: 'Pokur', desc: 'Poker on urbit' },
    { icon: <FaMoon />, name: 'EScape', desc: 'Chat on urbit' },
    { icon: <FaQuestionCircle />, name: 'XYZ', desc: 'Something else on urbit' },
  ]

  const upcomingIntegrations = [
    { icon: <FaStore />, name: 'App store', desc: 'App store on urbit' },
    { icon: <FaTwitter />, name: 'Trill', desc: 'Twitter on urbit' },
    { icon: <FaQuestionCircle />, name: 'XYZ', desc: 'Something else on urbit' },
  ]

  const focusAreas = [
    {name: 'Game Infrastructure', link: 'example.com'},
    {name: 'Gambling', link: 'example.com'},
    {name: 'Social', link: 'example.com'},
    {name: 'Content', link: 'example.com'},
    {name: 'Investing', link: 'example.com'},
    {name: 'Productivity Suites', link: 'example.com'},
    {name: 'NFT', link: 'example.com'},
    {name: 'DeFi', link: 'example.com'},
    {name: 'Financial', link: 'example.com'},
  ]

  const processes = [
    { name: 'Review our Focus Areas', desc: 'We believe that certain projects can benefit the most from building on Uqbar. Pick the one that matches our projects or interest and send us your proposal' },
    { name: 'Submit Application Form', desc: 'Fill out our simple application form with your proposal. We want to get to know you and your project to evaluate it quickly.' },
    { name: 'Meet the Ecosystem Team', desc: 'We will reach out to you within 48hrs of submission to schedule a first introduction call.' },
    { name: 'Investment Committee', desc: 'We gather the information for your application form and our introduction call to review it internally. We give you feedback within 7 days.' },
    { name: 'Agreement', desc: 'We work on the funding documents and highlight how our partnership will work - once it is signed, we are ready to go.' },
    { name: 'Operational Support', desc: 'We provide operational support in all areas that are necessary for you to succeed and build a successful company.' },
  ]

  return (
    <>
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
                    <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar-clearpaper/'>CLEARPAPER</a>
                    <Divider />
                    <a target='_blank' href='https://uqbarnetwork.medium.com/zk-execution-and-uqbar-a8f49784155e'>ZK-ROLLUPS</a>
                    <Divider />
                    <a target='_blank' href='https://uqbar-network.gitbook.io/dev-docs/'>DEV DOCS</a>
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
                  <Row onClick={()=> setPage('blog')} className={`tab ${classNames({ isMobile, active: page == 'blog' })}`}>Content</Row>
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
        </Container>
        
      </Col>
      <Col className='segmentum'>
        <Entry>
          <Text large>Uqbar Ecosystem</Text>
          <Text>
            We invest capital, as well as technical and operational expertise in founders who are reshaping Web 3.0. Build on Uqbar. We help you succeed. 
          </Text>
        </Entry>
        <Entry>
          <Text large>What is Uqbar?</Text>
          <Text>
            Uqbar is a coding environment and zero-knowledge rollup to the Ethereum network built atop the Urbit protocol. Leveraging the power of Urbit’s unique peer-to-peer network, Uqbar enables a unified on- and off-chain environment that seamlessly integrates everyday social and asset management tools with powerful distributed consensus mechanisms through state-of-the-art ZK-architecture.
          </Text>
        </Entry>
        <Entry>
          <Text large>Why build on Uqbar?</Text>
          <Text>
            XYZs
          </Text>
        </Entry>
      </Col>
      <Col className='segmentum dark'>
        <Entry>
          <Text large>Featured Integrations</Text>
          <Row between className='integrations'>
            {featuredIntegrations.map((fi, i) => <Col key={i} className='sleeker integration'>
              {fi.icon}
              <Text large>{fi.name}</Text>
              <Text>{fi.desc}</Text>
            </Col>)}
          </Row>
        </Entry>
      </Col>
      <Col className='segmentum'>
        <Entry>
          <Text large>Upcoming Integrations</Text>
          <Row className='integrations'>
            {upcomingIntegrations.map((ui, i) => <Col key={i} className='sleeker integration'>
              {ui.icon}
              <Text large>{ui.name}</Text>
              <Text>{ui.desc}</Text>
            </Col>)}
          </Row>
        </Entry>
      </Col>
      <Col className='segmentum dark'>
        <Entry>
          <Text large>Focus Areas</Text>
          <Row style={{ flexWrap: 'wrap' }}>{focusAreas.map((fa, i) => <Col className='sleeker focusArea' key={i}>
            <Row between>{fa.name} <FaArrowRight /></Row>
          </Col>)}</Row>
        </Entry>
      </Col>
      <Col className='segmentum'>
        <Entry>
          <Text large> Ecosystem Process </Text>
          <Row style={{ flexWrap: 'wrap' }}>
            {processes.map((p, i) => <Col key={i} className='sleeker process'>
              <Text large>{i+1}.</Text>
              <Text>{p.name}</Text>
              <Text className='mt1'>{p.desc}</Text>
            </Col>)}
          </Row>
        </Entry>
      </Col>
      <Col className='segmentum dark'>
        <Entry>
          <Text large>Office Hours</Text>
          <Text>
            Your chance to connect directly with our Ecosystem team. This is a good fit for you, if you need non-financial support, want feedback before applying, or just need help identifying resources. You can book your slot here.
          </Text>
          <Text className='mt1'>
            Office hours are not an application, or a chance to fully pitch your project. We want to provide you guidance to take the next step in our ecosystem process with higher confidence - the more contact you provide us about your plan and challenges, the better we can help you. 
          </Text>
        </Entry>
      </Col>
    </>

  )
}

export default Home
