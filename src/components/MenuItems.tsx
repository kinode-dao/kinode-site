import classNames from 'classnames'
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa6'
import Col from './spacing/Col'
import Row from './spacing/Row'
import Link from './nav/Link'
import './MenuItems.scss'
import { useState } from 'react'
import Text from '../components/text/Text'
import { Looney } from './Looney'
import MenuButton from './phonebook/MenuButton'

interface MenuItemsProps {
  onToggle: () => void
  isMobile: boolean
  menuOpen: boolean
  setMenuOpen: (menuOpen: boolean) => void
  isInFooter?: boolean
}

const MenuItems: React.FC<MenuItemsProps> = ({ onToggle, isMobile, menuOpen, setMenuOpen, isInFooter }) => {
  const [mouseIn, setMouseIn] = useState(false)

  return <Row
    className={classNames('menu overlay mr1', { isMobile, menuOpen, isInFooter })}
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
      onClick={() => setMenuOpen(false)}
    >
      <Link href='/build'>Build</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='//book.kinode.org'>Docs</Link>
    </Col>
    <Col className={classNames('join-box', { isInFooter })}>
      <h1 className='join'>Join the community</h1>
      <Text className='josh osl'>josh@kinode.org</Text>
      <Row className='socials'>
        <a className='social' target='_blank' rel="noreferrer" href='https://discord.gg/mYDj74NkfP'><FaDiscord /></a>
        <a className='social' target='_blank' rel="noreferrer" href='https://github.com/kinode-dao'><FaGithub /></a>
        <a className='social' target='_blank' rel="noreferrer" href='https://twitter.com/KinodeOS'><FaTwitter /></a>
        <a className='social' target='_blank' rel="noreferrer" href='https://www.youtube.com/@kinodeOS'><FaYoutube /></a>
        {/* <a target='_blank' rel="noreferrer" href='https://t.me/uqbarnetwork'><FaTelegram /></a> */}
      </Row>
      <Link href='/privacy' className='privacy'>Privacy Policy</Link>
    </Col>
    <Looney />
  </Row>
}

export default MenuItems