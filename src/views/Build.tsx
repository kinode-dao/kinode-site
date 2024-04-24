import * as Scroll from 'react-scroll'
import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import './Build.scss'
import { useState } from 'react'
import Col from '../components/spacing/Col'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import MenuItems from '../components/MenuItems'
import Link from '../components/nav/Link'
import { FaArrowRightFromBracket, FaBookBookmark, FaChevronRight, FaGear, FaScrewdriverWrench } from 'react-icons/fa6'
import glowbird1 from '../../src/assets/img/glowlogo1.svg'
import glowbird2 from '../../src/assets/img/glowlogo2.svg'
import glowbird3 from '../../src/assets/img/glowlogo3.svg'
import glowbird4 from '../../src/assets/img/glowlogo4.svg'

import db from '../../src/assets/img/db.svg'
import chevrons from '../../src/assets/img/chevrons.svg'
import globe from '../../src/assets/img/globe.svg'
import lotus from '../../src/assets/img/lotus.svg'
import openDoor from '../../src/assets/img/open-door.png'
import slabs from '../../src/assets/img/slabs.png'


import Loader from '../components/popups/Loader'
import build from '../../src/assets/img/build.webp';
import { FooterMenu } from '../components/phonebook/FooterMenu'
import { SignUpForNewsletter } from '../components/phonebook/SignUpForNewsletter'

const Build = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const docsLinks = [
    {
      title: 'INTRODUCTION',
      icon: globe,
      link: 'https://book.kinode.org/intro.html',
      desc: 'a technical overview of Kinode OS',
    },
    {
      title: 'APP TUTORIAL',
      icon: chevrons,
      link: 'https://book.kinode.org/build-and-deploy-an-app.html',
      desc: 'An in-depth guide to creating and deploying a blockchain-integrated p2p chess application',
    },
    {
      title: 'INSTALLATION',
      icon: db,
      link: 'https://book.kinode.org/install.html',
      desc: 'A quick guide to joining the Kinode network',
    },
    {
      title: 'SET UP DEV ENVIRONMENT',
      icon: lotus,
      link: 'https://book.kinode.org/kit/install.html',
      desc: 'Jump in and get your hands dirty',
    },
  ]

  return <Col className={classNames('page-container', { isMobile })}>
    <Loader images={[build]} />
    <Col className={classNames('build page', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Text className='title'>
            <Scroll.Element name='top' />
            Build
          </Text>
        </Col>
        <Row className={classNames('docs-links', { isMobile })}>
          {docsLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              external
              className='docs-link'
            >
              <div className='bg' />
              <div className='shine' />
              <img src={link.icon} />
              <Col>
                <h2 className='docs-link-title'>{link.title}</h2>
                <Text className='docs-link-desc'>{link.desc}</Text>
              </Col>
            </Link>
          ))}
        </Row>
        <Col className='say-four-things'>
          <div className='bg'>
            <img className='glowbird g1' src={glowbird1} />
            <img className='glowbird g2' src={glowbird2} />
            <img className='glowbird g3' src={glowbird3} />
            <img className='glowbird g4' src={glowbird4} />
          </div>
          <Row className={classNames('say-two-things', { isMobile })}>
            <Col className='two-things text-on-left'>
              <Col className='blurb'>
                <div className='shine' />
                <div className='shinebg' />
                <h2>Identity</h2>
                <Text>NFT-backed PKI used for key-signing and encryption provides default identity network and reputation ecosystem that seamlessly composes between apps.</Text>
              </Col>
              <Col className='blurb'>
                <div className='shine' />
                <div className='shinebg' />
                <h2>Networking</h2>
                <Text>Built-in networking for all applications through Kinode PKI and choice to act as direct or indirect node for package routing.</Text>
              </Col>
            </Col>
            <img src={openDoor} />
          </Row>
          <Row className={classNames('say-two-things', { isMobile })}>
            <img src={slabs} />
            <Col className='two-things text-on-right'>
              <Col className='blurb'>
                <div className='shine' />
                <div className='shinebg' />
                <h2>Data Persistence</h2>
                <Text>Applications store data on user nodes, safeguarded by remote backups: no need for complex server architecture to protect user privacy and data.</Text>
              </Col>
              <Col className='blurb'>
                <div className='shine' />
                <div className='shinebg' />
                <h2>Blockchain</h2>
                <Text>Default access to Ethereum L1 for all applications, and eventual integration with popular L2s.</Text>
              </Col>
            </Col>
          </Row>
        </Col>
      </Col>
    </Col>
    {!menuOpen && <SignUpForNewsletter />}
    <FooterMenu />
    <MenuItems onToggle={onToggle} isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText='' />
  </Col>
}

export default Build