
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
import { FaMediumM, FaPen, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from '../components/nav/Link'
import GoAway from '../components/nav/GoAway'

const Home  = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const isMobile = isMobileCheck()

  useEffect(() => {
    fetch(`/api/feed`)
    .then(data => data.json())
    .then(data => {
      setEpisodes(data.items)
    })
  }, [])

  return (
    <Row className='podcast'>
        <Section className='sidebar'>
          <Text mono className='yellow title'>the network age</Text>
          <Card>
            <Text>
              The Network Age shines a light on our decentralized future. 
            </Text>
            <Text className='mt1'>
              Join the boys as they dissect and analyze everything from crypto technology and the blockchain economy to digital culture and borderless nations. 
            </Text>
          </Card>
          <Section>
            <Text large mono className='yellow'>Connect</Text>
            <Card>
              <Row>
                <Text mono large mr1 className='urbit'>~</Text>
                <Text mono>
                  ~mister-hoster-dozzod-hocwet/network-age-antechamber
                </Text>
              </Row>
            </Card>
          
            <Card href='https://twitter.com/basileSportif'> 
              <Row>
                <FaTwitter className='mr1' />
                <Text>
                  @basileSportif
                </Text>
              </Row>
            </Card>
            
            <Card href='https://twitter.com/AlephDao'>
              <Row>
                <FaTwitter className='mr1' />
                <Text>
                  @AlephDao
                </Text>
              </Row>
            </Card>
            
            <Card href='https://twitter.com/BichulR'>
              <Row>
                <FaTwitter className='mr1' />
                <Text>
                  @BichulR
                </Text>
              </Row>
            </Card>

          </Section>
        </Section>

        <Section className='main'>
          <Text large mono className='yellow'>Top Episodes</Text>
          {episodes.map((e, i) => <EpisodeCard episode={e} key={i} />)}
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
            
          <Card>
            <Text large mono>Aleph DAO</Text>
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
                Hanging Out <br /> with Uqbar
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
        </Row>


  )
}

export default Home