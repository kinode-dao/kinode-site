import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'

import './Home.scss'
import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaBars, FaGripHorizontal } from 'react-icons/fa'
import HomeMenu from '../components/phonebook/HomeMenu'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'


const Home  = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Col className='home'>
      <Navbar onToggle={onToggle} />
      <Container>
        <Col className='title'>
          <Text className='untyped'>
            A CODING <br/>
            ENVIRONMENT <br/> FOR
            <ReactTypingEffect 
              className='typed'
              cursorClassName='cursor'
              text={['WEB3 APPS', 'DOGS', 'SECRET SOCIETIES']}
              speed={100}
              eraseDelay={2000}
              typingDelay={0}
              />
          </Text>
        </Col>
        <Text className='sidecard'>
          UQBAR IS A <br/> 
          ONE-STOP CODING ENVIRONMENT <br/> 
          THAT MAKES WRITING AND <br/>
          DEPLOYING SMART CONTRACTS <br/>
          SIMPLE, EFFECTIVE AND SECURE.
        </Text>
      </Container>
      <div className='overlay'></div>
    </Col>

  )
}

export default Home