import React, { useState } from 'react'
import Row from '../../components/spacing/Row'
import Link from './Link'
import logo from '../../assets/img/uqbar-orange.png'
import wlogo from '../../assets/img/Uqbar icon black.svg'
import rlogo from '../../assets/img/uqbar-redwyt.png'
import Text from '../../components/text/Text'
import Col from '../spacing/Col'
import Marquee from 'react-fast-marquee'
import HomeMenu from '../phonebook/HomeMenu'

import './Navbar.scss'
import classNames from 'classnames'
import { isMobileCheck } from '../../utils/dimensions'
interface NavbarProps {
  onToggle: Function
  menuOpen: boolean
  pokur?: boolean
  hideBtn?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, onToggle, pokur, hideBtn }) => {
  const isMobile = isMobileCheck()
  
  return (  
    <Col className={classNames('navbar', { isMobile })}>
    
      <Row style={{ width: '100%', justifyContent: 'space-between' }}>
        <Row className={classNames('logo-text', { isMobile })}>
          <Link external title='Home' href='/' className='nav-link logo'>
            <Row>
              { pokur ? <img src={rlogo} alt='Uqbar Logo' /> :  <img src={logo} alt='Uqbar Logo' /> }
            </Row>
          </Link>
          <Col>
            <Text large className='logo-title'>{pokur ? 'POKUR' : 'UQBAR'}</Text>
            {pokur && <Text small>BY UQBAR</Text>}
          </Col>
        </Row>

        {!hideBtn && !pokur && <HomeMenu open={menuOpen} onToggle={onToggle} />}
      </Row>
    </Col> 
  )
}

export default Navbar

