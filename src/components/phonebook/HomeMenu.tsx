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
  open: boolean
  onToggle: Function
}

const HomeMenu : React.FC<HomeMenuProps> = ({ open, onToggle }) => {
  const isMobile = isMobileCheck() 
  const toggleOpen = () => {
    onToggle()
  }

  return ( 
    <Col className={classNames('home-menu-container', { isMobile, open })}>
      <Button className='menu-button' onClick={toggleOpen}>
          {open ? <FaPlus className='icon' /> : <FaBars className='icon' />}
          <Text>{ open ? 'CLOSE' : 'MENU'}</Text>
      </Button>
    </Col>
  )
}

export default HomeMenu