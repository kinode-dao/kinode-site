import classNames from 'classnames'
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import Col from './spacing/Col'
import Row from './spacing/Row'
import Link from './nav/Link'
import './MenuItems.scss'
import { useState } from 'react'
import Text from '../components/text/Text'
import looney1 from '../assets/img/looneytunes1.svg'
import looney2 from '../assets/img/looneytunes2.svg'
import looney3 from '../assets/img/looneytunes3.svg'

interface MenuItemsProps {
  onToggle: () => void
  isMobile: boolean
  menuOpen: boolean
}

const MenuItems: React.FC<MenuItemsProps> = ({ onToggle, isMobile, menuOpen }) => {
  const [mouseIn, setMouseIn] = useState(false)

  return <Col
    className={classNames('menu overlay mr1', { isMobile, menuOpen })}
  >
    <Row className='box-box'>
      <Col className='box box1 shine'></Col>
      <Col className='box box2 shine'></Col>
    </Row>
    <Row className='bird shine'></Row>
    <Col
      className={classNames('items', { mouseIn })}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      {/* <Link href='/'>Home</Link> */}
      <Link href='/about'>About</Link>
      <Link href='/build'>Build</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='//book.kinode.org'>Docs</Link>
      {/* <Link href='/age'>Network Age</Link> */}
      <Link href='/get-involved'>Get Involved</Link>
    </Col>
    <h1 className='join'>Join the community</h1>
    <Text className='josh osl'>josh@kinode.org</Text>
    <Row className='socials'>
      <a target='_blank' rel="noreferrer" href='https://discord.gg/mYDj74NkfP'><FaDiscord /></a>
      <a target='_blank' rel="noreferrer" href='https://github.com/kinode-dao'><FaGithub /></a>
      <a target='_blank' rel="noreferrer" href='https://twitter.com/KinodeOS'><FaTwitter /></a>
      <a target='_blank' rel="noreferrer" href='https://www.youtube.com/@kinodeOS'><FaYoutube /></a>
      {/* <a target='_blank' rel="noreferrer" href='https://t.me/uqbarnetwork'><FaTelegram /></a> */}
    </Row>
    <Link href='/privacy' className='privacy'>Privacy Policy</Link>
    <Col className='looney'>
      <img src={looney1} alt='looney tunes 1' className='l l1' />
      <img src={looney2} alt='looney tunes 2' className='l l2' />
      <img src={looney3} alt='looney tunes 3' className='l l3' />
    </Col>
  </Col>
}

export default MenuItems