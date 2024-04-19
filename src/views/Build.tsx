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

import CopyrightInfo from '../components/phonebook/CopyrightInfo'
import ScrollDownArrow from '../components/phonebook/ScrollDownArrow'
import Loader from '../components/popups/Loader'
import build from '../../src/assets/img/build.webp';
import { FooterMenu } from '../components/phonebook/FooterMenu'

const Build = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const docsLinks = [
    {
      title: 'INTRODUCTION',
      icon: <FaArrowRightFromBracket />,
      link: 'https://book.kinode.org/intro.html'
    },
    {
      title: 'INSTALLATION',
      icon: <FaScrewdriverWrench />,
      link: 'https://book.kinode.org/install.html'
    },
    {
      title: 'SET UP DEV ENVIRONMENT',
      icon: <FaGear />,
      link: 'https://book.kinode.org/kit/install.html'
    },
    {
      title: 'APP TUTORIAL',
      icon: <FaBookBookmark />,
      link: 'https://book.kinode.org/build-and-deploy-an-app.html'
    }
  ]

  return <Col className={classNames('page-container', { isMobile })}>
    <Loader images={[build]} />
    <Col className={classNames('build page', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText='' />
          <Text className='title'>
            <Scroll.Element name='top' />
            Build
          </Text>
        </Col>
        <Row className='docs-links'>
          {docsLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              external
              className='docs-link'
            >
              <div className='bg' />
              <div className='shine' />
              {link.icon}
              <Text>{link.title}</Text>
            </Link>
          ))}
        </Row>
        <Col className='bords' />
        <Col className='say-two-things'>
          <div className='bg'>
            <img className='glowbird g1' src={glowbird1} />
            <img className='glowbird g2' src={glowbird2} />
            <img className='glowbird g3' src={glowbird3} />
            <img className='glowbird g4' src={glowbird4} />
          </div>
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
        <Col className='lamp-bords' />
        <Col className='say-two-things'>
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
      </Col>
    </Col>
    <FooterMenu />
    {menuOpen && <MenuItems onToggle={onToggle} isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    <ScrollDownArrow />
  </Col>
}

export default Build