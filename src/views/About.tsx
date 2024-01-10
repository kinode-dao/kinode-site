import * as Scroll from 'react-scroll'
import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import './About.scss'
import { useEffect, useState } from 'react'
import Col from '../components/spacing/Col'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import Menu from '../components/Menu'
import Link from '../components/nav/Link'

import tim from '../assets/img/basile.jpeg'
import steve from '../assets/img/steve.jpeg'
import joshamy from '../assets/img/joshamy.jpeg'
import ben from '../assets/img/ben.jpeg'
import edgar from '../assets/img/edgar.jpeg'
import markus from '../assets/img/markus.jpeg'
import luc from '../assets/img/luc.jpeg'
import akira from '../assets/img/akira.jpeg'
import drew from '../assets/img/drew.jpeg'

import assembly from '../assets/img/assembly.jpeg'
import coinfund from '../assets/img/coinfund.jpeg'
import bigbrain from '../assets/img/bigbrain.jpg'
import cmcc from '../assets/img/cmcc.svg'

import lounge1 from '../assets/img/lounge1.jpeg'
import lounge2 from '../assets/img/lounge2.jpeg'

import CopyrightInfo from '../components/phonebook/CopyrightInfo'

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<'general' | 'apps' | 'blog' | 'other'>('general')
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const team: { name: string, title: string, bio: string, img: string }[] = [
    {
      name: 'Basile Genève',
      title: 'CEO',
      bio: 'Basile has over a decade of experience as a programmer, developer, and business leader. He has founded multiple successful web 3 companies and has served on the board of the Urbit Foundation, where he has dedicated himself to the project of building blockchain functionality into the Urbit stack.',
      img: tim
    },
    { 
      name: 'Steve Noble',
      title: 'Business Development',
      bio: 'Steve has over 10 years experience in venture capital and market making, having financed companies in sectors ranging from resource management to biotechnology, developing business models and management strategies. He also has extensive experience in business development for web 3, in particular launching ICOs and listing tokens on cryptocurrency exchanges.',
      img: steve
    }, 
    {
      name: 'Ben', 
      title: 'Lead Developer',
      bio: `Ben regrets having a degree in Computer Science, which he should have dropped when he first discovered decentralized computing. His free time not taken up by fixing bugs is spent on travel and lindy walks.`,
      img: ben
    },
  ]

  const restOfTeam = [
    {
      name: 'Edgar P.',
      title: 'Creative Director',
      bio: `Edgar holds a B.A. from Harvard University and an M.F.A. in Creative Writing from the University of Montana. He has worked as a writer and advisor for numerous Web 3 projects, including Blockmason and Plutux Finance, and co-hosts the popular technology podcast The Network Age. He has taught writing at institutions of all levels, from universities to prisons to private seminars.`,
      img: edgar
    },
    { 
      name: 'Joshua',
      title: 'Community Manager',
      bio: `Joshua holds an A.B. in Philosophy (Hons) and an M.A. in Applied Linguistics from Georgia State University.  He is a former Marine and later spent a decade teaching English in Japan, Turkey, and China and later taught computer science.  He's a co-host of the popular technology podcast The Network Age and occasionally writes Shakespeare Authorship conspiracy theories (most recently for the Mars Review of Books).`,
      img: joshamy
    },
    {
      name: 'Markus', 
      title: 'Developer',
      bio: 'Marcus made a brief appearance in tradfi before succumbing to the zoomer call of crypto. In the Ethereum ecosystem, he developed a lending protocol and NFT marketplace and now contributes to Nectar infrastructure and userspace apps.',
      img: markus
    },
    {
      name: 'Luc', 
      title: 'Developer',
      bio: 'Luc is Luc',
      img: luc
    },
    {
      name: 'Akira', 
      title: 'Developer',
      bio: 'Akira holds a B.A. in Linguistics and Chinese. He is a beef cattle farmer and musician who has worked as a developer for both startups and government contractors.',
      img: akira
    },
    {
      name: 'Drew', 
      title: 'Developer',
      bio: 'Drew studied Computer Science and Mathematics at the University of Virginia before dropping out to work as a full time smart contract engineer and developer for multiple startups.',
      img: drew
    },
    {
      name: 'Nick',
      title: 'Developer',
      bio: 'Nick holds a PhD from the University of Chicago in Physical Chemistry, where he studied the structure of complex liquids using computer simulations. Before joining Nectar, he worked as a Backend Software Engineer at an Automatic Speech Recognition startup, building a searchable archive for Zoom recordings. His research includes the applications of technology and cryptography to increased digital privacy.',
      img: ''
    }
  ].sort(() => Math.random() - 0.5)

  team.push(...restOfTeam)

  return <Col className={classNames('page-container', { isMobile })}>
    <Col className={classNames('about page', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText={isMobile ? 'NECTAR' : ''} />
          <Text className='title'>
            <Scroll.Element name='top' />
            about <Text className='lgold'>us</Text>
          </Text>
        </Col>
        <Col className='infos'>
          <Row className='infos-and-image'>
            <Col className='infos-list'>
              <Col className='info'>
                <Text className='title'>
                  Global Consensus, <Text className='red bold'>Local Compute</Text>
                </Text>
                <Text>
                  Nectar OS combines the power of decentralized infrastructure with the security of sovereign computing. Execute smart contracts, run local AI, and message peers directly, all on a single integrated system. 
                </Text>
              </Col>
              <Col className='info'>
                <Text className='title'>
                  <Text className='red bold'>Public Cloud</Text> Infrastructure
                </Text>
                <Text>
                  Enjoy lightning quick cloud processing and data storage without corporate intermediaries. A high-bandwidth distributed network as powerful as AWS and secure as Ethereum. 
                </Text>
              </Col>
            </Col>
            <Col className='side-image bg-bd-blur'>
              <img src={lounge1} />
            </Col>
          </Row>
          <Row className='infos-and-image blued'>
            <Col className='side-image bg-bd-blur'>
              <img src={lounge2} />
            </Col>
            <Col className='infos-list'>
              <Col className='info'>
                <Text className='title'>
                Portable, Scalable, <Text className='white bold'>Usable</Text>
                </Text>
                <Text>
                  Built on Wasm modules, Nectar OS is the first large-scale peer-to-peer network designed to be run on any machine by millions of users in dozens of programming languages. 
                </Text>
              </Col>
              <Col className='info'>
                <Text className='title'>
                  A <Text className='white bold'>Bespoke</Text> Internet Experience
                </Text>
                <Text>
                  Explore the internet from the safety of your personal node, customized for your web usage tendencies. Control your data, own your applications, design your perfect internet. 
                </Text>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col className='partnerships full-band'>
          <Text className='title'>
            Partnerships
          </Text>
          <Row className='partners'>
            <Link target="_blank" external href='https://assembly.capital' className='col partner'>
              <img src={assembly} />
              <Text className='partner-name'>Assembly</Text>
            </Link>
            <Link target="_blank" external href='https://coinfund.io' className='col partner'>
              <img src={coinfund}  />
              <Text className='partner-name'>Coinfund</Text>
            </Link>
            <Link target="_blank" external href='https://bigbrain.holdings' className='col partner'>
              <img src={bigbrain}  />
              <Text className='partner-name'>Big Brain</Text>
            </Link>
            <Link target="_blank" external href='https://cmcc.vc' className='col partner'>
              <img src={cmcc} />
              <Text className='partner-name'>CMCC</Text>
            </Link>
          </Row>
        </Col>
        <Col className='team full-band'>
          <Text className='title'>
            Team
          </Text>
          <Row className='team-members'>
            {team.map(member => <Col key={member.name} className='team-member'>
              <img src={member.img} />
              <Text small bold className='name'>
                {member.name}
                <Text className='ml1 red'>{member.title}</Text>
              </Text>
              <Col className='bio bg-bd-blur'>
                <Text small>
                  {member.bio}
                </Text>
              </Col>
            </Col>)}
          </Row>
        </Col>
        <CopyrightInfo />
      </Col>
    </Col>
    {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
  </Col>
}

export default About