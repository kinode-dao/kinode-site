import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'

import './Home.scss'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import MenuItems from '../components/MenuItems'
import CopyrightInfo from '../components/phonebook/CopyrightInfo'

import KinodeText from '../assets/img/kinode_text.svg'
import Partners from '../components/phonebook/Partners'
import Stairs1 from '../assets/img/stairs1.svg'
import Stairs2 from '../assets/img/stairs2.svg'
import Team from '../components/phonebook/Team'
import { Cave } from '../components/phonebook/Cave'
import { FooterMenu } from '../components/phonebook/FooterMenu'

export type Page = 'general' | 'apps' | 'blog' | 'other'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  return (<Col className='page-container'>
    <Col className={classNames('home page top', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText={''} />
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <div className='background' />
          <div className='dimmer' />
          <div className='brighter' />
          <Text className='title'>
            <img src={KinodeText} alt='Kinode logo' />
          </Text>
          <Text className='subtitle'>
            A decentralized OS, {isMobile && <br />} built for crypto.
          </Text>
        </Col>
      </Col>
    </Col>
    <Col className='page orange'>
      <div className='circle'></div>
      <Col className='circle-text'>
        <h1>
          Public Cloud
          <br />
          Infrastructure
        </h1>
        <Text>
          Enjoy lightning-quick cloud processing and data storage without corporate intermediaries. A high-bandwidth distributed network as powerful as AWS and as secure as Ethereum.
        </Text>
      </Col>
    </Col>
    <Col className='page orange'>
      <div className='circle'></div>
      <Col className='circle-text'>
        <h1>
          Global Consensus,
          <br />
          Local Compute
        </h1>
        <Text>
          Kinode OS combines the power of decentralized infrastructure with the security of sovereign computing. Execute smart contracts, run local AI, and message peers directly: all on a single integrated system.
        </Text>
      </Col>
    </Col>
    <Partners />
    <Col className='page stairs'>
      <img src={Stairs1} alt='Stairs' className='stairs1' />
      <img src={Stairs2} alt='Stairs' className='stairs2' />
    </Col>
    <Team />
    <Cave />
    <FooterMenu />
    {menuOpen && <MenuItems
      onToggle={onToggle}
      isMobile={isMobile}

      menuOpen={menuOpen}
    />}
  </Col>)
}

export default Home