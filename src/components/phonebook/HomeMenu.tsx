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
    <Col className={classNames('home-menu-container', { isMobile, open })}>
      <Button className='menu-button' onClick={toggleOpen}>
        <Row>
          {open ? <FaPlus className='icon' /> : <FaBars className='icon' />}
          <Text>{ open ? 'CLOSE' : 'MENU'}</Text>
        </Row>
      </Button>
    </Col>
  )
}

export default HomeMenu