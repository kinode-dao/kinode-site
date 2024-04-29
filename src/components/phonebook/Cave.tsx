import Col from "../spacing/Col"
import Row from "../spacing/Row"
import bord from '../../assets/img/bord.png'
import { isMobileCheck } from "../../utils/dimensions"
import classNames from "classnames"
import './Cave.scss'

export const Cave = () => {
  const isMobile = isMobileCheck()
  return <Col className={classNames('page cave', { isMobile })}>
    <Row className="dimmer"></Row>
    <Row className="brighter shine"></Row>
    <Row className='background'></Row>
    <img src={bord} alt='bord' className="bord" />
  </Col>
}

