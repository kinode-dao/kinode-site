import * as Scroll from 'react-scroll'
import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import './About.scss'
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
import bigbrain from '../assets/img/bigbrain.jpg'
import cmcc from '../assets/img/cmcc.svg'
import lounge1 from '../assets/img/lounge1.jpeg'
import lounge2 from '../assets/img/lounge2.jpeg'

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<'general' | 'apps' | 'blog' | 'other'>('general')
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return <Col className={classNames('page-container', { isMobile })}>
    <Col className={classNames('about page', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText='' />
          <Text className='title tshado'>
            <Scroll.Element name='top' />
            about <Text className='bold blue'>us</Text>
          </Text>
          <Text className='subtitle tshado'>
            Write <Text className='bold blue'>Wasm apps</Text> in popular languages <Text className='bold orange'>simple, efficient, and secure</Text>.
          </Text>
        </Col>
        <Col className='infos'>
          <Row>
            <Col className='infos-list'>
              <Col className='info'>
                <Text className='title'>
                  Global Consensus, <Text className='white bold'>Local Compute</Text>
                </Text>
                <Text>
                  Uqbar combines the power of decentralized infrastructure with the security of sovereign computing. Execute smart contracts, run local AI, and message peers directly, all on a single integrated system. 
                </Text>
              </Col>
              <Col className='info'>
                <Text className='title'>
                  <Text className='white bold'>Public Cloud</Text> Infrastructure
                </Text>
                <Text>
                  Enjoy lightning quick cloud processing and data storage without corporate intermediaries. A high-bandwidth distributed network as powerful as AWS and secure as Ethereum. 
                </Text>
              </Col>
            </Col>
            <Col className='subtitle bg-bd-blur'>
              <img src={lounge1} />
            </Col>
          </Row>
          <Row className='blued'>
            <Col className='subtitle bg-bd-blur'>
              <img src={lounge2} />
            </Col>
            <Col className='infos-list'>
              <Col className='info'>
                <Text className='title'>
                Portable, Scalable, <Text className='white bold'>Usable</Text>
                </Text>
                <Text>
                  Built on Wasm modules, Uqbar is the first large-scale peer-to-peer network designed to be run on any machine by millions of users in dozens of programming languages. 
                </Text>
              </Col>
              <Col className='info'>
                <Text className='title'>
                  A <Text className='white  bold'>Bespoke</Text> Internet Experience
                </Text>
                <Text>
                  Explore the internet from the safety of your personal node, customized for your web usage tendencies. Control your data, own your applications, design your perfect internet. 
                </Text>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col className='partnerships full-band'>
          <Text className='title'>
            Partnerships
          </Text>
          <Row className='partners'>
            <Link target="_blank" external href='https://assembly.capital' className='col partner'>
              <img src={assembly} />
              <Text className='partner-name'>Assembly</Text>
            </Link>
            <Link target="_blank" external href='https://coinfund.io' className='col partner'>
              <img src={coinfund}  />
              <Text className='partner-name'>Coinfund</Text>
            </Link>
            <Link target="_blank" external href='https://bigbrain.holdings' className='col partner'>
              <img src={bigbrain}  />
              <Text className='partner-name'>Big Brain</Text>
            </Link>
            <Link target="_blank" external href='https://cmcc.vc' className='col partner'>
              <img src={cmcc} />
              <Text className='partner-name'>CMCC</Text>
            </Link>
          </Row>
        </Col>
        <Col className='team full-band'>
          <Text className='title'>
            Team
          </Text>
          <Row className='team-members'>
            <Col className='team-member'>
              <img src={tim} />
              <Text className='name'>
                Tim Galebach
                <Text className='orange ml1'>CEO</Text>
              </Text>
              <Col className='bio bg-bd-blur'>
                <Text small>
                  Tim has over a decade of experience as a programmer, developer, and business leader. He has founded multiple successful web 3 companies and has served on the board of the Urbit Foundation, where he has dedicated himself to the project of building blockchain functionality into the Urbit stack. 
                </Text>
              </Col>
            </Col>
            <Col className='team-member'>
              <img src={steve} />
              <Text className='name'>
                Steve Noble 
                <Text className='orange ml1'>CFO</Text>
              </Text>
              <Col className='bio bg-bd-blur'>
                <Text small>
                  Steve has over 10 years experience in venture capital and market making, having financed companies in sectors ranging from resource management to biotechnology, developing business models and management strategies. He also has extensive experience in business development for web 3, in particular launching ICOs and listing tokens on cryptocurrency exchanges. 
                </Text>
              </Col>
            </Col>
          </Row>
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

export default About