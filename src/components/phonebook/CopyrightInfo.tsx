import Col from "../spacing/Col"
import Row from "../spacing/Row"
import Text from '../text/Text'


const CopyrightInfo: React.FC = () => {
    return (
        <Col className='super-footer'>
          <Row className='tiny-stripe'>
            <Text className='rights-reserved'>Copyright ©2024 NECTAR. All Rights Reserved.</Text>
          </Row>
        </Col>
    )
}

export default CopyrightInfo