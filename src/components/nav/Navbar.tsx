import React from 'react'
import Row from '../../components/spacing/Row'
import Link from './Link'
import Text from '../../components/text/Text'
import Col from '../spacing/Col'
import HomeMenu from '../phonebook/HomeMenu'
import kinodeLogo from '../../assets/img/kinode.svg'
import './Navbar.scss'
import classNames from 'classnames'
import { isMobileCheck } from '../../utils/dimensions'
interface NavbarProps extends React.PropsWithChildren {
  onToggle: Function
  menuOpen: boolean
  pokur?: boolean
  hideBtn?: boolean
  overrideText?: string
}

const Navbar: React.FC<NavbarProps> = ({ overrideText, menuOpen, onToggle, hideBtn, children }) => {
  const isMobile = isMobileCheck()

  return (
    <Col className={classNames('navbar', { isMobile })}>
      <Row style={{ width: '100%', justifyContent: 'space-between' }}>
        <Row className={classNames('logo-text', { isMobile })}>
          <Link external title='Home' href='/' className='nav-link logo'>
            <Row>
              <img src={kinodeLogo} alt='Kinode Logo' />
            </Row>
          </Link>
          <Col>
            <Text large className='logo-title'>{overrideText !== undefined ? overrideText : 'KINODE'}</Text>
          </Col>
        </Row>
        {children}
        {!hideBtn && <HomeMenu open={menuOpen} onToggle={onToggle} />}
      </Row>
    </Col>
  )
}

export default Navbar

