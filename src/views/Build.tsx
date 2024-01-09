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
import Menu from '../components/Menu'
import Link from '../components/nav/Link'
import { FaChevronRight, FaFastForward, FaGraduationCap, FaQuestionCircle, FaWrench } from 'react-icons/fa'
import mainhum from '../assets/img/main-hum.jpeg'
import mainhum2 from '../assets/img/main-hum2.jpeg'
import hum7 from '../assets/img/hum7.jpeg'
import hum8 from '../assets/img/hum8.jpeg'
import flower from '../assets/img/flower.jpeg'
import flower2 from '../assets/img/flower2.jpeg'
import CopyrightInfo from '../components/phonebook/CopyrightInfo'

const Build = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<'general' | 'apps' | 'blog' | 'other'>('general')
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return <Col className={classNames('page-container', { isMobile })}>
    <Col className={classNames('build page', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText='' />
          <Text className='title tshado'>
            <Scroll.Element name='top' />
            build
          </Text>
          <Text className='subtitle tshado'>
            dApp development, <Text className='bold blue'>streamlined</Text>.
          </Text>
        </Col>
        <Col className='documentation full-band'>
          <Text className='title'>Developer Documentation</Text>
          <Row className='doc-links'>
            <Link href='' className='doc-link info row'>
              <Row>
                <img src={hum8} />
              </Row>
              <Col>
                <Text className='title'>Introduction <FaChevronRight size={12} /></Text>
                <Text>slight curvature of beak is present, but the contrast between the curvature of the body and head and the flung-back wings/tail/beak is an aesthetic touchpoint</Text>
              </Col>
            </Link>
            <Link href='' className='doc-link info row'>
              <Row>
                <img src={flower} />
              </Row>
              <Col>
                <Text className='title'>Quick Start <FaChevronRight size={12} /></Text>
                <Text>slight curvature of beak is present, but the contrast between the curvature of the body and head and the flung-back wings/tail/beak is an aesthetic touchpoint</Text>
              </Col>
            </Link>
            <Link href='' className='doc-link info row'>
              <Row>
                <img src={flower2} />
              </Row>
              <Col>
                <Text className='title'>Set Up Dev Environment <FaChevronRight size={12} /></Text>
                <Text>slight curvature of beak is present, but the contrast between the curvature of the body and head and the flung-back wings/tail/beak is an aesthetic touchpoint</Text>
              </Col>
            </Link>
            <Link href='' className='doc-link info row'>
              <Row>
                <img src={hum7} />
              </Row>
              <Col>
                <Text className='title'>App Tutorial <FaChevronRight size={12} /></Text>
                <Text>slight curvature of beak is present, but the contrast between the curvature of the body and head and the flung-back wings/tail/beak is an aesthetic touchpoint</Text>
              </Col>
            </Link>
          </Row>
        </Col>
        <Col className='infos'>
          <Row>
            <Col className='infos-list'>
              <Col className='info'>
                <Text className='title'>Identity</Text>
                <Text>
                  NFT-backed PKI used for key-signing and encryption provides default identity network and reputation ecosystem that seamlessly composes between apps.
                </Text>
              </Col>
              <Col className='info'>
                <Text className='title'>Networking</Text>
                <Text>
                  Built-in networking for all applications through Nectar PKI and choice to act as direct or indirect node for package routing.
                </Text>
              </Col>
            </Col>
            <Col className='subtitle bg-bd-blur'>
              <img src={mainhum} />
            </Col>
          </Row>
          <Row className='blued'>
            <Col className='subtitle bg-bd-blur'>
              <img src={mainhum2} />
            </Col>
            <Col className='infos-list'>
              <Col className='info'>
                <Text className='title'>
                  Data Persistence
                </Text>
                <Text>
                  Applications store data on user nodes, safeguarded by remote backups, and eliminating the need for complex server architecture while protecting user privacy and data.  
                </Text>
              </Col>
              <Col className='info'>
                <Text className='title'>Blockchain</Text>
                <Text>
                  Default access to Ethereum L1 for all applications, and eventual integration with popular L2s. 
                </Text>
              </Col>
            </Col>
          </Row>
        </Col>
        <CopyrightInfo />
      </Col>
    </Col>
    {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
  </Col>
}

export default Build