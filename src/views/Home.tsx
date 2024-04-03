import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'

import './Home.scss'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import Menu from '../components/Menu'
import CopyrightInfo from '../components/phonebook/CopyrightInfo'

export type Page = 'general' | 'apps' | 'blog' | 'other'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  return (<Col className='page-container'>
    <Col className={classNames('home page', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} />
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Text className='title tshado'>
            A <Text className='gold'>decentralized OS</Text>, {isMobile && <br />} built for crypto.
          </Text>
        </Col>
        <CopyrightInfo />
      </Col>
    </Col>
    {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
  </Col>)
}

export default Home