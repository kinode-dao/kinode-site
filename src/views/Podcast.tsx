
import uqbar from '../assets/img/uqbar-pink.png'
import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import Card from '../components/page/Card'
import Section from '../components/page/Section'
import './Podcast.scss'
import { useEffect, useState } from 'react'
import { Episode } from '../types/Episode'
import EpisodeCard from '../components/network-age/EpisodeCard'
import { FaMediumM, FaPen, FaSpinner, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from '../components/nav/Link'
import GoAway from '../components/nav/GoAway'
import Col from '../components/spacing/Col'
import logo from '../assets/img/bg-sm.jpg'
import aleph from '../assets/img/aleph.jpg'

const Home  = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const isMobile = isMobileCheck()

  useEffect(() => {
    fetch(`/api/feed`, { headers: {
      "accepts":"application/json"
    }})
    .then(data => data.json())
    .then(data => {
      setEpisodes(data.items)
    })
  }, [])


  const related = (
    <>
    <Section>
        <Text large mono className='yellow'>Connect</Text>
        <Card>
          <Row>
            <Text mono large mr1 className='urbit'>~</Text>
            <Text small mono breakAll>
              ~mister-hoster-dozzod-hocwet/network-age-antechamber
            </Text>
          </Row>
        </Card>
        <Card>
          <Row>
            <Text mono large mr1 className='urbit'>~</Text>
            <Text small mono breakAll>
              ~hocwyn-tipwex/uqbar-event-horizon-forever
            </Text>
          </Row>
        </Card>

        <Row>
          <Card className='no-away' href='https://twitter.com/basileSportif'> 
            <Row>
              <Text small>
                @basileSportif
              </Text>
            </Row>
          </Card>
          
          <Card className='no-away' href='https://twitter.com/AlephDao'>
            <Row>
              <Text small>
                @AlephDao
              </Text>
            </Row>
          </Card>
          
          <Card className='no-away' href='https://twitter.com/BichulR'>
            <Row>
              <Text small>
                @BichulR
              </Text>
            </Row>
          </Card>
        </Row>

      </Section>
      <Section>
        <Text large mono className='yellow'>Related Projects</Text>
        <Link href='/'>
          <Card>
            <Text large mono>Uqbar </Text>
            <Row>
              <img src={uqbar} className='mr1' style={{ fontSize:'x-large',  height: 40, background: 'white', borderRadius: 999, border: '3px solid'  }} />
              <Text>
                Uqbar is a seamless development environment and Zero-Knowledge rollup to Ethereum built atop the Urbit operating system. 
              </Text>
            </Row>
            <GoAway />
          </Card>
        </Link>
          
        <Card href={'https://twitter.com/AlephDao'}>
          <Text large mono>Aleph DAO</Text>
          <Row>
          <img src={aleph} className='mr1 aleph' />
          <Text>Aleph is a global community of developers and creators building the Network Age.</Text>
          </Row>
        </Card>
        <Card href={'https://urbit.org'}>
          <Text large mono>Urbit</Text>
          <Row>
            <Text mono large mr1 className='urbit'>~</Text>
            <Text>
              Urbit is a decentralized peer-to-peer network and clean-slate OS. 
            </Text>
          </Row>
        </Card>
        <Text large mono className='yellow'>Can't Get Enough?</Text>
        <Card href='https://www.youtube.com/channel/UC1Mb7Y7Yytdw9LOmUFdEKbA'>
          <Text>
            <Row>
              <FaYoutube style={{ marginRight: 12 }} /> 
              Hanging Out with Uqbar
            </Row>
          </Text>
        </Card>
        <Card href='https://bichulritsen.substack.com/'>
          <Text  mono>
            <Row >
              <FaPen style={{ marginRight: 12 }} />
              Snake Shack
            </Row>
          </Text>
        </Card>
      </Section>
    </>
  )

  const sidebar = (
    <Section className='sidebar'>
      <Card className='firstCard'>
        <Row>
          <img src={logo} className='logo' />
          <Text large mono className='yellow title'>the <br/>network<br/>age</Text>
        </Row>
      </Card>
      <Card>
        <Text>
          The Network Age shines a light on our decentralized future. 
        </Text>
        <Text className='mt1'>
          Join the boys as they dissect and analyze everything from crypto technology and the blockchain economy to digital culture and borderless nations. 
        </Text>
      </Card>
      

      {!isMobile && related}
    </Section>
  )

  const episodeFeed = (
    <Section className='main'>
      <Text large mono className='yellow'>Latest Episodes</Text>
      {episodes.length
        ? episodes.map((e, i) => <EpisodeCard episode={e} key={i} />)
        : <Row className='mt1'>
            <FaSpinner className='spin mr1' />
            <Text large>Loading...</Text>
          </Row>
      }
    </Section>
  )


  const contents = <>
    {sidebar}
    {episodeFeed}
    {isMobile && related}
  </>

  return (
    isMobile 
      ? <Col className='podcast'>{contents}</Col>
      : <Row className='podcast'>{contents}</Row>


  )
}

export default Home