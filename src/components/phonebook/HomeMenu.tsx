import Button from '../form/Button'
import { FaPlus } from 'react-icons/fa6'
import Text from '../text/Text'
import Col from '../spacing/Col'
import { isMobileCheck } from '../../utils/dimensions'
import classNames from 'classnames'

import './HomeMenu.scss'
import { FancyMenuDots } from '../FancyMenuDots'
import { useState } from 'react'
interface HomeMenuProps {
  open: boolean
  onToggle: Function
}

const HomeMenu: React.FC<HomeMenuProps> = ({ open, onToggle }) => {
  const isMobile = isMobileCheck()
  const toggleOpen = () => {
    onToggle()
  }
  const [hover, setHover] = useState(false)

  return (
    <Col className={classNames('home-menu-container', { isMobile, open })}>
      <Button className='menu-button clear' onClick={toggleOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {!open && <Text>MENU</Text>}
        {open
          ? <FaPlus className='icon' size={64} />
          : <FancyMenuDots className={classNames('icon', { hover })} size={18} />}
      </Button>
    </Col>
  )
}

export default HomeMenu