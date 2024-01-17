import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import './GetInvolved.scss'
import { useEffect, useState } from 'react'
import Col from '../components/spacing/Col'
import classNames from 'classnames'
import Navbar from '../components/nav/Navbar'
import Menu from '../components/Menu'
import Input from '../components/form/Input'
import Button from '../components/form/Button'
import { FaChevronRight } from 'react-icons/fa'
import CopyrightInfo from '../components/phonebook/CopyrightInfo'

const GetInvolved = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<'general' | 'apps' | 'blog' | 'other'>('general')
  const [email, setEmail] = useState('')
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const onSubmit = () => {
    if (!email) return alert('Please enter an email address.')
    if (!email.match(/.+@.+\..+/)) return alert('Please enter a valid email address.')
    fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(res => {
      alert(`Thanks for signing up! ${email} has been added to the waitlist.`)
      setEmail('')
    })
    .catch(err => alert('Something went wrong. Please try again later.'))
  }

  return <Col className={classNames('page-container', { isMobile })}>
    <Col className={classNames('get-involved page', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText={isMobile ? 'KINODE' : ''} />
          <Text className='title'>Sign up for <Text className='lgold'>beta access</Text>.</Text>
          <Text className='subtitle bg-bd-blur superblur'>
            <form className='email-form' onSubmit={onSubmit}>
              <Row>
                <Input onChange={(e) => setEmail(e.target.value)} required type='email' className='email' placeholder='your@email.com' />
                <Button className='small submit' variant='unstyled' onClick={onSubmit}>
                  <FaChevronRight className='icon' />
                </Button>
              </Row>
            </form>
          </Text>
        </Col>
        <CopyrightInfo />
      </Col>
    </Col>
    {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
  </Col>
}

export default GetInvolved