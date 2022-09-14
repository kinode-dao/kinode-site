import Button from '../form/Button'
import { FaBars, FaDiscord, FaGithub, FaGithubAlt, FaMedium, FaPlus, FaTelegram, FaTwitter } from 'react-icons/fa'
import Text from '../text/Text'
import Link from '../nav/Link'
import './HomeMenu.scss'
import Col from '../spacing/Col'
import { isMobileCheck } from '../../utils/dimensions'
import classNames from 'classnames'
import Row from '../spacing/Row'
import { useState } from 'react'
import Entry from '../spacing/Entry'
import Divider from '../spacing/Divider'

interface HomeMenuProps {
  onToggle: Function
}

const HomeMenu : React.FC<HomeMenuProps> = ({ onToggle }) => {
  const isMobile = isMobileCheck() 
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
    onToggle()
  }

  return ( 
    <Col className={`home-menu-container ${classNames({ isMobile, open })}`}>
      <Button className='menu-button' onClick={toggleOpen}>
        <Row>
          {open ? <FaPlus className='icon' /> : <FaBars className='icon' />}
          <Text ml1>{ open ? 'CLOSE' : 'MENU'}</Text>
        </Row>
      </Button>
      <Col className={`home-menu ${classNames({ open })}`}>
        <Row between className='book'>

          <Col className='page'>
            <Entry title='GENERAL'>
              <Link href=''>WHAT IS UQBAR</Link>
              <Divider />
              <Link href=''>CLEARPAPER</Link>
              <Divider />
              <Link href=''>ZK-ROLLUPS</Link>
              <Divider />
              <Link href=''>DEV DOCS</Link>
              <Divider />
              <Link href=''>WEBSITE</Link>
              <Divider />
              <Link href=''>FAQ</Link>
            </Entry>
          </Col>

          <Col className='tabs'>
            <Row className='tab active'>GENERAL</Row>
            <Row className='tab'>BLOG</Row>
            <Row className='tab'>OTHER</Row>
          </Col>
        </Row>
        <Row between className='socials'> 
          <a href=''><FaDiscord /></a>
          <a href='https://github.com/uqbar-dao'><FaGithub /></a>
          <a href=''><FaTwitter /></a>
          <a href=''><FaMedium /></a>
          <a href=''><FaTelegram /></a>
        </Row>
      </Col>
    </Col>
  )
}

export default HomeMenu