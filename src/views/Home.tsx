import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'

import './Home.scss'
import { isMobileCheck } from '../utils/dimensions'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import MenuItems from '../components/MenuItems'

import KinodeText from '../assets/img/kinode_text.svg'
import Partners from '../components/phonebook/Partners'
import Stairs1 from '../assets/img/stairs1.webp'
import Stairs2 from '../assets/img/stairs2.svg'
import Team from '../components/phonebook/Team'
import { Cave } from '../components/phonebook/Cave'
import { FooterMenu } from '../components/phonebook/FooterMenu'
import Loader from '../components/popups/Loader'
import { SignUpForNewsletter } from '../components/phonebook/SignUpForNewsletter'
import * as Scroll from 'react-scroll'
import { OrangeBall } from '../components/phonebook/OrangeBall'
import { useScroll } from 'react-spring'

export type Page = 'general' | 'apps' | 'blog' | 'other'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  return (<Col className='page-container'>
    <Scroll.Element name='top' />
    <Loader />
    <Col className={classNames('home page top', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText={''} />
      <Col className={classNames('main', { isMobile })}>
        <Col className='header main-page'>
          <div className='background' />
          <div className='dimmer' />
          <div className='brighter' />
          <Text className='title kinode'>
            <img src={KinodeText} alt='Kinode logo' />
          </Text>
          <Text className='subtitle'>
            Integrate everything.
          </Text>
        </Col>
      </Col>
    </Col>
    <OrangeBall />
    <Partners />
    <Col className='page stairs'>
      <img src={Stairs1} alt='Stairs' className='stairs1' />
      <img src={Stairs2} alt='Stairs' className='stairs2' />
    </Col>
    <Team />
    <Cave />
    {!menuOpen && <SignUpForNewsletter />}
    <FooterMenu />
    <MenuItems
      onToggle={onToggle}
      isMobile={isMobile}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
    />
  </Col>)
}

export default Home