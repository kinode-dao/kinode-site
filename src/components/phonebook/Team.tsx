import Text from '../../components/text/Text'
import Row from '../../components/spacing/Row'
import Col from '../../components/spacing/Col'

import tim from '../../assets/img/basile.jpeg'
import steve from '../../assets/img/steve.jpeg'
import joshamy from '../../assets/img/joshamy.jpeg'
import doria from '../../assets/img/doria.jpeg'
import edgar from '../../assets/img/edgar.jpeg'
import markus from '../../assets/img/markus.jpeg'
import luc from '../../assets/img/luc.jpeg'
import akira from '../../assets/img/akira.webp'
import will from '../../assets/img/will.jpeg'
import nick from '../../assets/img/nick.jpeg'
import james from '../../assets/img/james.jpeg'
import chevron from '../../assets/img/chevron.svg'
import glowbird from '../../assets/img/glowlogo.svg'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import Button from '../form/Button'
import classNames from 'classnames'
import { isMobileCheck } from '../../utils/dimensions'

const Team = () => {
  const isMobile = isMobileCheck()
  const [selectedTeamMemberIndex, setSelectedTeamMemberIndex] = useState<number>(5)
  const [showBio, setShowBio] = useState<boolean>(false)

  const team: { name: string, title: string, bio: string, img: string }[] = [
    {
      name: 'Deckard',
      title: 'Business Development and Investor Relations',
      bio: 'Deckard has over 10 years experience in venture capital and market making, having financed companies in sectors ranging from resource management to biotechnology, developing business models and management strategies. He also has extensive experience in business development for web 3, in particular launching ICOs and listing tokens on cryptocurrency exchanges.',
      img: steve
    },
    {
      name: 'Luc',
      title: 'Developer',
      bio: 'Luc started out working with games for a decade, slowly moving over to ML, with decentralization being his key focus.',
      img: luc
    },
    {
      name: 'Edgar',
      title: 'Creative Director',
      bio: `Edgar holds a B.A. from Harvard University and an M.F.A. in Creative Writing from the University of Montana. He has worked as a writer and advisor for numerous Web 3 projects and co-hosts the popular technology podcast The Network Age. He has taught writing at institutions of all levels, from universities to prisons to private seminars.`,
      img: edgar
    },
    {
      name: 'Josh',
      title: 'Community Manager',
      bio: `Josh holds an A.B. in Philosophy (Hons) and an M.A. in Applied Linguistics from Georgia State University. He is a former Marine.  Before working at Kinode, he spent a decade teaching English and Computer Science in Japan, Turkey, and China.  He currently resides in El Salvador with his family.`,
      img: joshamy
    },
    {
      name: 'Doria',
      title: 'Lead Developer',
      bio: `Doria has been a passionate researcher and hobbyist investor in cryptocurrency since 2013. A lifelong programmer, she specializes in distributed systems and functional programming. Building Kinode has taught her about project management and team building. When she's not busy fixing bugs, her time is spent traveling, reading science-fiction, and taking lindy walks.`,
      img: doria
    },
    {
      name: 'Timothy',
      title: 'CEO',
      bio: 'Timothy has over a decade of experience as a programmer, developer, and business leader. He has founded multiple successful web 3 companies and has served on the board of the Urbit Foundation, where he has dedicated himself to the project of building blockchain functionality into the Urbit stack.',
      img: tim
    },
    {
      name: 'Nick',
      title: 'Developer',
      bio: 'Nick holds a PhD from the University of Chicago in Physical Chemistry, where he studied the structure of complex liquids using computer simulations. Before joining Kinode, he worked as a Backend Software Engineer at an Automatic Speech Recognition startup, building a searchable archive for Zoom recordings.',
      img: nick
    },
    {
      name: 'Will',
      title: 'Developer',
      bio: 'Will holds a BA from the University of Virginia and an MBA from UCLA. He has worked as a frontend, mobile, and full-stack engineer for large companies, nascent startups, and secret societies.',
      img: will
    },
    {
      name: 'James',
      title: 'Developer',
      bio: `James has a history from the early days of DeFi, having built and audited several projects on Ethereum mainnet. He's a techno optimist passionate about creating a peer to peer user-owned-and-operated internet. In his free time,  he consumes both fiction and science fiction and indulges in lindy walks when available.`,
      img: james
    },
    {
      name: 'Markus',
      title: 'Developer',
      bio: 'Markus made a brief appearance in tradfi before succumbing to the zoomer call of crypto. In the Ethereum ecosystem, he developed a lending protocol and NFT marketplace and now contributes to Kinode infrastructure and userspace apps.',
      img: markus
    },
    {
      name: 'Akira',
      title: 'Developer',
      bio: 'Akira holds a B.A. in Linguistics and Chinese. He is a beef cattle farmer and musician who has worked as a developer for both startups and government contractors.',
      img: akira
    },
  ]

  return <Col className={classNames('page team', { isMobile })}>

    <Text className='title'>
      TEAM
    </Text>

    <img src={glowbird} alt="glowing bird logo" className='glowbird' />

    <Row className='team-members'>
      {team.map((member, index) => {
        const distanceFromSelected = Math.abs(index - selectedTeamMemberIndex);
        const beforeSelected = index < selectedTeamMemberIndex
        const isSelected = index === selectedTeamMemberIndex
        return <Col
          key={member.name}
          className={classNames('team-member', { shine: isSelected, bioOpen: showBio && isSelected })}
          style={{
            transform: `translate3d(
              ${distanceFromSelected * (beforeSelected ? -100 : 175)}%,
              ${distanceFromSelected * 256}px, 
              -${distanceFromSelected * 512}px
            )`,
            filter: `blur(${distanceFromSelected * 5}px)`,
            zIndex: isSelected ? team.length * 2 : team.length - distanceFromSelected,
          }}
        >
          <img src={member.img} alt={member.name} />
          {isSelected && <Text small bold className='name white col'>
            {member.name}
            <div className='dotted-line' />
            <Text className='team-member-title'>
              {member.title}
            </Text>
          </Text>}
          <Text small className='bio'>
            {member.bio}
          </Text>
          {isSelected && <Button
            className='open-bio'
            variant='unstyled'
            onClick={() => setShowBio(!showBio)}
          >
            {showBio ? <FaChevronUp /> : <FaChevronDown />}
          </Button>}
        </Col>
      })}
    </Row>
    <img
      src={chevron}
      className='arrow left'
      onClick={() => {
        if (selectedTeamMemberIndex === 0) {
          setSelectedTeamMemberIndex(team.length - 1)
          setShowBio(false)
        } else {
          setSelectedTeamMemberIndex(selectedTeamMemberIndex - 1)
          setShowBio(false)
        }
      }}
      style={{
        zIndex: team.length * 2
      }}
    />
    <img
      src={chevron}
      className='arrow right'
      onClick={() => {
        if (selectedTeamMemberIndex === team.length - 1) {
          setSelectedTeamMemberIndex(0)
          setShowBio(false)
        } else {
          setSelectedTeamMemberIndex(selectedTeamMemberIndex + 1)
          setShowBio(false)
        }
      }}
      style={{
        zIndex: team.length * 2
      }}
    />
  </Col>
}

export default Team