import Col from "../spacing/Col"
import Row from "../spacing/Row"
import bord from '../../assets/img/bord.png'

export const Cave = () => {
  return <Col className='page cave'>
    <Row className="dimmer"></Row>
    <Row className="brighter shine"></Row>
    <Row className='background'></Row>
    <img src={bord} alt='bord' className="bord" />
  </Col>
}

