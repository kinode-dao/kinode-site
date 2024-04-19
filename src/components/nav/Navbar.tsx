import React from 'react'
import Row from '../../components/spacing/Row'
import Link from './Link'
import Text from '../../components/text/Text'
import Col from '../spacing/Col'
import MenuButton from '../phonebook/MenuButton'
import kinodeLogo from '../../assets/img/kinode.svg'
import './Navbar.scss'
import classNames from 'classnames'
import { isMobileCheck } from '../../utils/dimensions'
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6'

interface NavbarProps extends React.PropsWithChildren {
  onToggle: Function
  menuOpen: boolean
  pokur?: boolean
  hideBtn?: boolean
  overrideText?: string
  backBtnLink?: string
}

const Navbar: React.FC<NavbarProps> = ({ overrideText, menuOpen, onToggle, hideBtn, children, backBtnLink }) => {
  const isMobile = isMobileCheck()

  return (
    <Col className={classNames('navbar', { isMobile })}>
      <Row style={{ width: '100%', justifyContent: 'space-between' }}>
        <Row className={classNames('logo-text', { isMobile })}>
          {backBtnLink
            ? <RouterLink to={backBtnLink} className='button clear back'>
              <FaArrowLeft /> BACK
            </RouterLink>
            : <>
              <Link external title='Home' href='/' className='nav-link logo'>
                <Row>
                  <img src={kinodeLogo} alt='Kinode Logo' />
                </Row>
              </Link>
              <Col>
                <Text large className='logo-title'>{overrideText !== undefined ? overrideText : 'KINODE'}</Text>
              </Col>
            </>}
        </Row>
        {children}
        {!hideBtn && <MenuButton open={menuOpen} onToggle={onToggle} />}
      </Row>
    </Col>
  )
}

export default Navbar

