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
import doria from '../assets/img/doria.jpeg'
import edgar from '../assets/img/edgar.jpeg'
import markus from '../assets/img/markus.jpeg'
import luc from '../assets/img/luc.jpeg'
import akira from '../assets/img/akira.jpeg'
import drew from '../assets/img/drew.jpeg'
import will from '../assets/img/will.jpeg'
import nick from '../assets/img/nick.jpeg'
import james from '../assets/img/james.jpeg'

import assembly from '../assets/img/assembly.png'
import bigbrain from '../assets/img/bigbrain.jpg'
import cmcc from '../assets/img/cmcc.svg'
import chorusone from '../assets/img/chorusone.png'
import delphi from '../assets/img/delphi.png'

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
      name: 'Basile',
      title: 'CEO',
      bio: 'Basile has over a decade of experience as a programmer, developer, and business leader. He has founded multiple successful web 3 companies and has served on the board of the Urbit Foundation, where he has dedicated himself to the project of building blockchain functionality into the Urbit stack.',
      img: tim
    },
    {
      name: 'Doria', 
      title: 'Lead Developer',
      bio: `Doria has been a passionate researcher and hobbyist investor in cryptocurrency since 2013. A lifelong programmer, she specializes in distributed systems and functional programming. Building Nectar has taught her about project management and team building. When she's not busy fixing bugs, her time is spent traveling, reading science-fiction, and taking lindy walks.`,
      img: doria
    },
  ]

  const restOfTeam = [
    { 
      name: 'Deckard',
      title: 'Business Development and Investor Relations',
      bio: 'Deckard has over 10 years experience in venture capital and market making, having financed companies in sectors ranging from resource management to biotechnology, developing business models and management strategies. He also has extensive experience in business development for web 3, in particular launching ICOs and listing tokens on cryptocurrency exchanges.',
      img: steve
    }, 
    {
      name: 'Edgar',
      title: 'Creative Director',
      bio: `Edgar holds a B.A. from Harvard University and an M.F.A. in Creative Writing from the University of Montana. He has worked as a writer and advisor for numerous Web 3 projects and co-hosts the popular technology podcast The Network Age. He has taught writing at institutions of all levels, from universities to prisons to private seminars.`,
      img: edgar
    },
    { 
      name: 'Josh',
      title: 'Community Manager',
      bio: `Josh holds an A.B. in Philosophy (Hons) and an M.A. in Applied Linguistics from Georgia State University. He is a former Marine.  Before working at Nectar, he spent a decade teaching English and Computer Science in Japan, Turkey, and China.  He currently resides in El Salvador with his family.`,
      img: joshamy
    },
    {
      name: 'Markus', 
      title: 'Developer',
      bio: 'Markus made a brief appearance in tradfi before succumbing to the zoomer call of crypto. In the Ethereum ecosystem, he developed a lending protocol and NFT marketplace and now contributes to Nectar infrastructure and userspace apps.',
      img: markus
    },
    {
      name: 'Luc', 
      title: 'Developer',
      bio: 'Luc started out working with games for a decade, slowly moving over to ML, with decentralization being his key focus.',
      img: luc
    },
    {
      name: 'Akira', 
      title: 'Developer',
      bio: 'Akira holds a B.A. in Linguistics and Chinese. He is a beef cattle farmer and musician who has worked as a developer for both startups and government contractors.',
      img: akira
    },
    {
      name: 'Dob', 
      title: 'Developer',
      bio: 'Dob studied Computer Science and Mathematics at the University of Virginia before dropping out to work as a full time smart contract engineer and developer for multiple startups.',
      img: drew
    },
    {
      name: 'Nick',
      title: 'Developer',
      bio: 'Nick holds a PhD from the University of Chicago in Physical Chemistry, where he studied the structure of complex liquids using computer simulations. Before joining Nectar, he worked as a Backend Software Engineer at an Automatic Speech Recognition startup, building a searchable archive for Zoom recordings.',
      img: nick
    },
    {
      name: 'Will',
      title: 'Developer',
      bio: 'Will holds a BA from the University of Virginia and an MBA from UCLA. He has worked as a frontend, mobile, and full-stack engineer for large companies, nascent startups, and secret societies.',
      img: will
    },
    {
      name: 'James',
      title: 'Developer',
      bio: `James has a history from the early days of DeFi, having built and audited several projects on Ethereum mainnet. He's a techno optimist passionate about creating a peer to peer user-owned-and-operated internet. In his freetime he consumes both fiction and science fiction and indulges in lindy walks when available.`,
      img: james
    }
  ].sort(() => Math.random() - 0.5)

  team.push(...restOfTeam)

  const partners = [
    { href: 'https://assembly.capital' , name: 'Assembly', img: assembly },
    { href: 'https://bigbrain.holdings' , name: 'Big Brain', img: bigbrain},
    { href: 'https://cmcc.vc' , name: 'CMCC', img: cmcc },
    { href: 'https://chorus.one/', name: 'Chorus One', img: chorusone },
    { href: 'https://delphiventures.io/', name : 'Delphi', img: delphi },
  ]

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
            {partners.map(partner => <Link target="_blank" external href={partner.href} className='col partner'>
              <img src={partner.img} />
              <Text className='partner-name'>{partner.name}</Text>
            </Link>)}
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
                <Col style={{ placeContent: 'center', alignItems: 'center' }}>
                  {member.name}
                  <Text className='dred'>{member.title}</Text>
                </Col>
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