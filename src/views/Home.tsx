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
            A <Text className='melon'>decentralized OS</Text>, built for crypto.
          </Text>
          <Text className='subtitle tshado'>
            A <Text className='bold blue'>decentralized OS</Text>, built for crypto. 
          </Text>
        </Col>
        <Text style={{ margin: '96px 36px', fontWeight: 'bold', textShadow: '1px 1px 0px #000', position: 'absolute', textAlign: 'center', fontSize: 72, color: 'white' }}>
          N <br />
          E <br />
          C <br />
          T <br />
          A <br />
          R <br />
        </Text>
      </Col>
    </Col>
    {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
  </Col>)
}

export default Home