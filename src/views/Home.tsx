import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'

import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import Menu from '../components/Menu'

export type Page = 'general' | 'apps' | 'blog' | 'other'

const Home  = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  return (<Col className='page-container'>
    <Col className={classNames('home page', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText='' />
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Text className='title tshado'>
            A coding environment for <Text className='red'>Web3 apps</Text>
          </Text>
          <Text className='subtitle tshado'>
            Uqbar is a
            <Text className='bold orange'>&nbsp;one-stop coding environment</Text> that 
            <br/>
            
            makes writing and deploying smart contracts
            <Text className='bold blue'>&nbsp; simple, efficient, and secure. &nbsp;</Text>
          </Text>
        </Col>
      </Col>
    </Col>
    {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
  </Col>)
}

export default Home