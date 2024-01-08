import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'

import './Home.scss'
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
            A <Text className='red'>decentralized OS</Text>, built for crypto
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