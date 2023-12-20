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

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<'general' | 'apps' | 'blog' | 'other'>('general')
  const isMobile = isMobileCheck()

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return <Col className={classNames('about-container', { isMobile })}>
    <Col className={classNames('about', { isMobile })}>
      <Col className={classNames('main', { isMobile })}>
        <Col className='header'>
          <Navbar menuOpen={menuOpen} onToggle={onToggle} overrideText='' />
          <Text className='title bg-bd-blur'>
            <Scroll.Element name='top' />
            about <Text className='bold blue'>us</Text>
          </Text>
          <Text className='subtitle bg-bd-blur superblur'>
            A <Text className='bold blue'>decentralized OS</Text>, built for crypto. 
          </Text>
        </Col>
        <Row className='infos'>
          <Col>
            <Col className='info'>
              <Text className='title'>
                Global Consensus, <Text className='orange bold'>Local Compute</Text>
              </Text>
              <Text>
                Uqbar combines the power of decentralized infrastructure with the security of sovereign computing. Execute smart contracts, run local AI, and message peers directly, all on a single integrated system. 
              </Text>
            </Col>
            <Col className='info'>
              <Text className='title'>
                <Text className='blue bold'>Public Cloud</Text> Infrastructure
              </Text>
              <Text>
                Enjoy lightning quick cloud processing and data storage without corporate intermediaries. A high-bandwidth distributed network as powerful as AWS and secure as Ethereum. 
              </Text>
            </Col>
            <Col className='info'>
              <Text className='title'>
              Portable, Scalable, <Text className='orange bold'>Usable</Text>
              </Text>
              <Text>
                Built on WASM modules, Uqbar is the first large-scale peer-to-peer network designed to be run on any machine by millions of users in dozens of programming languages. 
              </Text>
            </Col>
            <Col className='info'>
              <Text className='title'>
                A <Text className='blue bold'>Bespoke</Text> Internet Experience
              </Text>
              <Text>
                Explore the internet from the safety of your personal node, customized for your web usage tendencies. Control your data, own your applications, design your perfect internet. 
              </Text>
            </Col>
          </Col>
          <Col className='subtitles'>
            <Col className='subtitle bg-bd-blur'>
              <Text className='mb1'>
                For devs, Uqbar provides a <Text className='bold orange'>unified programming environment</Text> that radically simplifies the development and deployment of <Text className='bold blue'>decentralized applications</Text>.
              </Text>
            </Col>
            <Col className='subtitle bg-bd-blur'>
              <Text>
                For users, Uqbar provides a <Text className='bold orange'>sovereign, powerful, bespoke</Text> web experience—<Text className='bold blue'>the internet as it was meant to be</Text>. 
              </Text>
            </Col>
          </Col>
        </Row>
        <Col className='partnerships'>
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
        <Col className='team'>
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