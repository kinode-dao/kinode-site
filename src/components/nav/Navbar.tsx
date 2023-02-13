import React, { useState } from 'react'
import Row from '../../components/spacing/Row'
import Link from './Link'
import logo from '../../assets/img/uqbar-orange.png'
import wlogo from '../../assets/img/Uqbar icon black.svg'
import Text from '../../components/text/Text'
import './Navbar.scss'
import Col from '../spacing/Col'
import Marquee from 'react-fast-marquee'
import HomeMenu from '../phonebook/HomeMenu'

interface NavbarProps {
  onToggle: Function
  menuOpen: boolean
  pokur?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, onToggle, pokur }) => {

  return (  
    <Col className='navbar'>
      <Row style={{ width: '100%', justifyContent: 'space-between' }}>
        <Row className='logo-text'>
          <Link external title='Home' href='/' className='nav-link logo'>
            <Row>
              { pokur ? <img style={{ filter: 'invert(1)' }} src={wlogo} alt='Uqbar Logo' /> :  <img src={logo} alt='Uqbar Logo' /> }
            </Row>
          </Link>
          <Text large className='logo-title'>UQBAR</Text>
        </Row>

        {!pokur && <HomeMenu open={menuOpen} onToggle={onToggle} />}

      </Row>
    </Col> 
  )
}

export default Navbar

