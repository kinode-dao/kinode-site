import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'

import './Home.scss'
import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import Marquee from 'react-fast-marquee'
import Menu from '../components/Menu'


export type Page = 'general' | 'apps' | 'blog' | 'other'

const Home  = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  const funnyTypedTexts = ['DAOs', 'secrets', 'societies', 'cults', 'Chads']
  const srsTypedTexts = ['Web3 apps', 'cities']
  const texts = funnyTypedTexts.flatMap((f, i) => (i % 2 == 0) ? [srsTypedTexts[0],f] : (i % 3 == 0) ? [srsTypedTexts[1], f] : f)

  return (<Col className='home-container'>
    {/* <Marquee gradient={false}>
      <Text> &nbsp;* WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY 
      </Text>
    </Marquee> */}
    <Col className={classNames('home', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} />
      <Col className='header'>
        <Text className='title bg-bd-blur'>
          <Text className='untyped'>
            A coding environment for
            <ReactTypingEffect 
              className='typed'
              cursorClassName='cursor'
              text={texts}
              speed={100}
              eraseDelay={5000}
              typingDelay={0}
            />
          </Text>
        </Text>
        <Text className='subtitle bg-bd-blur superblur'>
            Uqbar is a
            <Text className='bold orange'>&nbsp;one-stop coding environment</Text> that 
            <br/>
            
            makes writing and deploying smart contracts
            <Text className='bold blue'>&nbsp; simple, efficient, and secure. &nbsp;</Text>
        </Text>
      </Col>
      <Row className={classNames('main', { isMobile })} between>
        {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
      </Row>
    </Col>
  </Col>)
}

export default Home