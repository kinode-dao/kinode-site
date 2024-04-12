import Text from '../components/text/Text'
import './Home.scss'
import { isMobileCheck } from '../utils/dimensions'
import './GetInvolved.scss'
import { useState } from 'react'
import Col from '../components/spacing/Col'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import MenuItems from '../components/MenuItems'
import { FaDiscord } from 'react-icons/fa'
import CopyrightInfo from '../components/phonebook/CopyrightInfo'
import Link from '../components/nav/Link'

const GetInvolved = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<'general' | 'apps' | 'blog' | 'other'>('general')
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return <Col className={classNames('page-container', { isMobile })}>
    <Col className={classNames('get-involved page', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Navbar menuOpen={menuOpen} onToggle={onToggle} />
          <Text className='title'>Join the <Text className='gold'>community</Text></Text>
          <Link className='button discord' external href='https://discord.gg/mYDj74NkfP'>
            <FaDiscord className='discord-icon' />
          </Link>
          <Text className='subtitle bg-bd-blur'>Tell @josh.kino we sent you.</Text>
        </Col>
        <CopyrightInfo />
      </Col>
    </Col>
    {menuOpen && <MenuItems onToggle={onToggle} isMobile={isMobile} menuOpen={menuOpen} />}
  </Col>
}

export default GetInvolved