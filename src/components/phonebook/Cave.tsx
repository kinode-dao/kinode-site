import Col from "../spacing/Col"
import Row from "../spacing/Row"
import { isMobileCheck } from "../../utils/dimensions"
import classNames from "classnames"
import './Cave.scss'

export const Cave = () => {
  const isMobile = isMobileCheck()
  return <Col className={classNames('page cave', { isMobile })}>
    <Row className="dimmer"></Row>
    <Row className="brighter shine"></Row>
    <Row className='background'>
      <video autoPlay muted loop playsInline disablePictureInPicture className="bg-vid">
        <source src='/videos/kinodetree.webm' type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay muted loop playsInline disablePictureInPicture className="centerpiece">
        <source src='/videos/kinodetree.webm' type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </Row>
  </Col>
}

