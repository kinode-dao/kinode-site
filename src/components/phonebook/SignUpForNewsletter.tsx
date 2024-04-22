import { isMobileCheck } from "../../utils/dimensions"
import Col from "../spacing/Col"
import './SignUpForNewsletter.scss'
import orangeCrescent from '../../assets/img/orange-crescent.svg'
import Text from '../../components/text/Text'
import Row from "../spacing/Row"
import Button from "../form/Button"
import { FaMagnifyingGlass } from "react-icons/fa6"
import classNames from "classnames"

export const SignUpForNewsletter = () => {
  const isMobile = isMobileCheck()

  return <Col className={classNames("sign-up-for-newsletter page", { isMobile })}>
    <img className="orange-crescent" src={orangeCrescent} />
    <Col className="sign-up-for-newsletter-content">
      <h1>Get Kinode in your inbox weekly.</h1>
      <Row>
        <input type="text" placeholder="Your email" />
        <Button className='clear'>Get started</Button>
      </Row>
      <Text className="stay-updated">
        Stay updated with articles delivered directly to you.
      </Text>
    </Col>
  </Col>
}

