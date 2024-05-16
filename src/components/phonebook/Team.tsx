import Text from '../../components/text/Text'
import Row from '../../components/spacing/Row'
import Col from '../../components/spacing/Col'

import memedeck from '../../assets/img/memedeck-icon2.png'
import valet from '../../assets/img/valet-icon.png'
import barter from '../../assets/img/barter-icon.png'
import commandCenter from '../../assets/img/command-center-icon.png'
import filter from '../../assets/img/filter-icon.png'
import chevron from '../../assets/img/chevron.svg'
import glowbird from '../../assets/img/glowlogo.svg'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import Button from '../form/Button'
import classNames from 'classnames'
import { isMobileCheck } from '../../utils/dimensions'

import './Team.scss'

const Team = () => {
  const isMobile = isMobileCheck()
  const [selectedTeamMemberIndex, setSelectedTeamMemberIndex] = useState<number>(0)
  const [showBio, setShowBio] = useState<boolean>(false)

  const team: { name: string, title: string, bio: string, img: string }[] = [
    {
      name: 'MemeDeck',
      title: 'Holium',
      bio: 'The ultimate AI-powered meme generation platform. Users can create based, viral memes in seconds. No design skills required - you just need your imagination.',
      img: memedeck
    },
    {
      name: 'Filter',
      title: 'zena.kino',
      bio: 'An LLM-powered Kinode app with associated browser extension that filters your Twitter feed based on customizeable rules.',
      img: filter
    },
    {
      name: 'Barter',
      title: 'markus.kino',
      bio: 'A tool for selling your NFTs through Telegram via a gamified AI assistant chat. Uses Kinode to integrate your wallets, your chats, and your LLM assistants.',
      img: barter
    },
    {
      name: 'Command Center',
      title: 'zena.kino',
      bio: 'A user-centric hub for controlling your Telegram chats and bots. Ingest and analyze data for future use and integrations.',
      img: commandCenter
    },
    {
      name: 'Valet',
      title: 'Kinode',
      bio: 'Valet is an all-in-one hosting suite for managing a set of Kinode instances.',
      img: valet
    },
  ]

  return <Col className={classNames('page team', { isMobile })}>

    <Text className='title'>
      PROJECTS
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