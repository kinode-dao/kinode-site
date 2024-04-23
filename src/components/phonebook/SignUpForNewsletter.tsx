import { isMobileCheck } from "../../utils/dimensions"
import Col from "../spacing/Col"
import './SignUpForNewsletter.scss'
import orangeCrescent from '../../assets/img/orange-crescent.svg'
import Text from '../../components/text/Text'
import Row from "../spacing/Row"
import Button from "../form/Button"
import { FaMagnifyingGlass } from "react-icons/fa6"
import classNames from "classnames"
import { useState } from "react"

export const SignUpForNewsletter = () => {
  const isMobile = isMobileCheck()
  const [email, setEmail] = useState('')
  const signUpForNewsletter = () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return alert('Please enter a valid email.')
    }
    fetch('/api/sign-up-for-newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    }).then(() => {
      alert('You have signed up for the Kinode newsletter. Congratulations!')
      setEmail('')
    }).catch(() => {
      alert('There was an issue signing you up. Please try again. If errors persist, please report this bug to our Discord.')
    })
  }

  return <Col className={classNames("sign-up-for-newsletter page", { isMobile })}>
    <img className="orange-crescent" src={orangeCrescent} />
    <Col className="sign-up-for-newsletter-content">
      <h1>Get Kinode in your inbox weekly.</h1>
      <Row>
        <input
          type="text"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className='clear'
          onClick={signUpForNewsletter}
        >
          Get started
        </Button>
      </Row>
      <Text className="stay-updated">
        Stay updated with articles delivered directly to you.
      </Text>
    </Col>
  </Col>
}

