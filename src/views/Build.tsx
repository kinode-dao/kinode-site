import * as Scroll from 'react-scroll'
import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import './Build.scss'
import { useEffect, useState } from 'react'
import Col from '../components/spacing/Col'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import Menu from '../components/Menu'
import Link from '../components/nav/Link'
import assembly from '../assets/img/assembly.jpeg'
import coinfund from '../assets/img/coinfund.jpeg'
import tim from '../assets/img/tim.png'
import steve from '../assets/img/steve.png'
import { FaFastForward, FaGraduationCap, FaQuestionCircle, FaWrench } from 'react-icons/fa'

const Build = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<'general' | 'apps' | 'blog' | 'other'>('general')
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return <Col className={classNames('build-container', { isMobile })}>
    <Col className={classNames('build', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText='' />
          <Text className='title bg-bd-blur'>
            <Scroll.Element name='top' />
            uq<Text className='bold orange'>build</Text>
          </Text>
          <Text className='subtitle bg-bd-blur superblur'>
            Uqbar is designed to alleviate the most frustrating obstacles to dApp development: identity, networking, data persistence, and blockchain integration.
          </Text>
        </Col>
        <Col className='build-it'>
          <Row className='info-grid'>
            <Col className='info'>
              <Text className='title orange'>Identity</Text>
              <Text>
                NFT-backed PKI used for key-signing and encryption provide default identity network and reputation ecosystem that seamlessly composes between apps.
              </Text>
            </Col>
            <Col className='info'>
              <Text className='title blue'>Networking</Text>
              <Text>
                Built-in networking for all applications through Uqbar PKI and choice to act as direct or indirect node for package routing.
              </Text>
            </Col>
          </Row>
          <Row className='info-grid'>
            <Col className='info'>
              <Text className='title blue'>Data Persistence</Text>
              <Text>
                Applications store data on user nodes, safeguarded by remote backups, and eliminating the need for complex server architecture while protecting user privacy and data.  
              </Text>
            </Col>
            <Col className='info'>
              <Text className='title orange'>Blockchain</Text>
              <Text>
                Default access to Ethereum L1 for all applications, and eventual integration with popular L2s. 
              </Text>
            </Col>
          </Row>
        </Col>
        <Col className='documentation'>
          <Text className='title'>Developer Documentation</Text>
          <Row className='doc-links'>
            <Link href='' className='doc-link row'><FaQuestionCircle className='icon' /> Introduction</Link>
            <Link href='' className='doc-link row'><FaFastForward className='icon' /> Quick Start</Link>
            <Link href='' className='doc-link row'><FaWrench className='icon' /> Set Up Dev Environment</Link>
            <Link href='' className='doc-link row'><FaGraduationCap className='icon' /> App Tutorial</Link>
          </Row>
        </Col>
        <Col className='super-footer'>
          <Row className='tiny-stripe'>
            <Text className='rights-reserved'>Copyright ©2024 UQBAR. All Rights Reserved.</Text>
          </Row>
        </Col>
      </Col>
    </Col>
    {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
  </Col>
}

export default Build