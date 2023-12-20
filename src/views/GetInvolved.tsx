import * as Scroll from 'react-scroll'
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
import Link from '../components/nav/Link'
import assembly from '../assets/img/assembly.jpeg'
import coinfund from '../assets/img/coinfund.jpeg'
import tim from '../assets/img/tim.png'
import steve from '../assets/img/steve.png'
import Input from '../components/form/Input'
import Button from '../components/form/Button'

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

  return <Col className={classNames('get-involved-container', { isMobile })}>
    <Col className={classNames('get-involved', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText='' />
          <Text className='title bg-bd-blur'>
            <Scroll.Element name='top' />
            get <Text className='bold blue'>involved</Text>
          </Text>
          <Text className='subtitle bg-bd-blur superblur'>
            Uqbar will soon release its beta development platform. To gain early access, and receive updates on Uqbar's development, sign up for our waitlist. 
          </Text>
        </Col>
        <Col className='sign-up info'>
          <Text className='title orange'>Sign up</Text>
          <form className='email-form' onSubmit={onSubmit}>
            <Col>
              <Input onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: 16 }} required type='email' className='email' placeholder='your@email.com' />
              <Button className='submit btn' onClick={onSubmit}>Submit</Button>
            </Col>
          </form>
        </Col>
        <Col className='super-footer'>
          <Row className='tiny-stripe'>
            <Text className='rights-reserved'>Copyright ©2024 UQBAR. All Rights Reserved.</Text>
          </Row>
        </Col>
      </Col>
    </Col>
    {menuOpen && <Menu onToggle={onToggle} isMobile={isMobile} setPage={setPage} page={page} menuOpen={menuOpen} />}
  </Col>
}

export default GetInvolved