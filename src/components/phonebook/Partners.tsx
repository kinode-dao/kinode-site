import Text from '../text/Text'
import Row from '../spacing/Row'
import Col from '../spacing/Col'
import Link from '../nav/Link'

import assembly from '../../assets/img/assembly.png'
import bigbrain from '../../assets/img/bigbrain.jpg'
import cmcc from '../../assets/img/cmcc.svg'
import championhill from '../../assets/img/champion-hill.jpg'
import delphi from '../../assets/img/delphi.png'
import { isMobileCheck } from '../../utils/dimensions'
import classNames from 'classnames'

const Partners = () => {
  const isMobile = isMobileCheck()

  const partners = [
    { href: 'https://assembly.capital', name: 'Assembly', img: assembly },
    { href: 'https://bigbrain.holdings', name: 'Big Brain', img: bigbrain },
    { href: 'https://cmcc.vc', name: 'CMCC', img: cmcc },
    { href: 'https://www.championhillventures.com/', name: 'Champion Hill', img: championhill },
    { href: 'https://delphiventures.io/', name: 'Delphi', img: delphi },
  ]

  return <Col className={classNames('page partners', { isMobile })}>
    <Text className='title'>
      PARTNERSHIPS
    </Text>
    <Row className='partners-list'>
      {partners.map(partner => <Link
        key={partner.href}
        target="_blank"
        external
        href={partner.href}
        className='col partner shine'
      >
        <img
          src={partner.img}
          alt={partner.name}
        />
        <Text className='partner-name'>
          {partner.name}
        </Text>
      </Link>)}
    </Row>
  </Col>
}

export default Partners