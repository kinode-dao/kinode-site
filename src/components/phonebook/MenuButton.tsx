import Button from '../form/Button'
import { FaPlus } from 'react-icons/fa6'
import Text from '../text/Text'
import Col from '../spacing/Col'
import { isMobileCheck } from '../../utils/dimensions'
import classNames from 'classnames'

import './MenuButton.scss'
import { FancyMenuDots } from '../FancyMenuDots'
import { useState } from 'react'
interface MenuButtonProps {
  open: boolean
  onToggle: Function
}

const MenuButton: React.FC<MenuButtonProps> = ({ open, onToggle }) => {
  const isMobile = isMobileCheck()
  const toggleOpen = () => {
    onToggle()
  }
  const [hover, setHover] = useState(false)

  return (
    <Col className={classNames('menu-button-container', { isMobile, open })}>
      <Button
        className={classNames('menu-button', { isMobile })}
        onClick={toggleOpen}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        variant='unstyled'
      >
        {!open && <Text>MENU</Text>}
        {open
          ? <FaPlus className='icon' size={32} />
          : <FancyMenuDots className={classNames('icon', { hover })} size={20} />}
      </Button>
    </Col>
  )
}

export default MenuButton