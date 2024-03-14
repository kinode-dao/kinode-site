import classNames from 'classnames'
import { FaDiscord, FaGithub, FaTwitter, FaMedium, FaTelegram, FaYoutube } from 'react-icons/fa'
import Col from './spacing/Col'
import Divider from './spacing/Divider'
import Entry from './spacing/Entry'
import Row from './spacing/Row'
import CopyIcon from './text/CopyIcon'
import Link from './nav/Link'
import './Menu.scss'

interface MenuProps {
  onToggle: () => void
  isMobile: boolean
  menuOpen: boolean
  setPage: (s: any) => void
  page: string
}

const Menu: React.FC<MenuProps> = ({ onToggle, isMobile, menuOpen }) => {
  return <Col className={classNames('menu mr1', { isMobile, menuOpen })}>
  <div className='overlay' onClick={onToggle}></div>
  <Row between className='book'>
    <Col className='home page'>
      <Entry className='mt1 mb1'>
        <Link href='/'>HOME</Link>
        <Divider />
        <Link href='/about'>ABOUT</Link>
        <Divider />
        <Link href='/build'>BUILD</Link>
        <Divider />
        <Link href='/blog'>BLOG</Link>
        <Divider />
        <Link href='//book.kinode.org'>DOCUMENTATION</Link>
        <Divider />
        <Link href='/age'>THE NETWORK AGE</Link>
        <Divider />
        <Link href='/get-involved'>GET INVOLVED</Link>
      </Entry>
    </Col>
    <Col className='tabs'>
      <Row className='tab active'></Row>
    </Col>
  </Row>
  <Row between className='socials'> 
    <a target='_blank' href='https://discord.gg/mYDj74NkfP'><FaDiscord /></a>
    <a target='_blank' href='https://github.com/kinode-dao'><FaGithub /></a>
    <a target='_blank' href='https://twitter.com/KinodeOS'><FaTwitter /></a>
    <a target='_blank' href='https://www.youtube.com/@kinodeOS'><FaYoutube /></a>
    <a target='_blank' href='https://t.me/uqbarnetwork'><FaTelegram /></a>
  </Row>
</Col>
}

export default Menu