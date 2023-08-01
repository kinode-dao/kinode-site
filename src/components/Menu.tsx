import classNames from "classnames"
import { FaDiscord, FaGithub, FaTwitter, FaMedium, FaTelegram } from "react-icons/fa"
import Col from "./spacing/Col"
import Divider from "./spacing/Divider"
import Entry from "./spacing/Entry"
import Row from "./spacing/Row"
import CopyIcon from "./text/CopyIcon"
import Link from "./nav/Link"
import './Menu.scss'

interface MenuProps {
  onToggle: () => void
  isMobile: boolean
  menuOpen: boolean
  setPage: (s: any) => void
  page: string
}

const Menu: React.FC<MenuProps> = ({ onToggle, isMobile, menuOpen, setPage, page }) => {
  return <Col className={classNames('menu mr1', { isMobile, menuOpen })}>
  <div className='overlay' onClick={onToggle}></div>
  <Row between className='book'>

    <Col className='page'>
      {page == 'general' && <Entry className='mt1' title='GENERAL'>
        <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/'>WHAT IS UQBAR</a>
        <Divider />
        <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar-clearpaper/'>CLEARPAPER</a>
        <Divider />
        <a target='_blank' href='https://uqbarnetwork.medium.com/zk-execution-and-uqbar-a8f49784155e'>ZK-ROLLUPS</a>
        <Divider />
        <a target='_blank' href='https://uqbar-network.gitbook.io/dev-docs/'>DEV DOCS</a>
      </Entry>}
      {page === 'apps' && <Entry className='mt1' title='APPS'>
        <a target='_blank' href='/pokur'>POKUR</a>
        <Divider />
        <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/uqbar-development-suite'>SUITE</a>
        <Divider />
        <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/pongo'>PONGO</a>
        <Divider />
        <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/escape'>ESCAPE</a>
        <Divider />
        <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/handshake'>HANDSHAKE</a>
      </Entry>}
      {page == 'blog' && <Entry className='mt1' title='CONTENT'>
        <a target='_blank' href='https://litpub.uqbar.ink/index'>BLOG</a>
        <Divider />
        <a target='_blank' href='https://uqbarnetwork.medium.com/the-uqbar-library-12e5beba6c81'>LIBRARY</a>
        <Divider />
        <a target='_blank' href='https://www.youtube.com/channel/UC1Mb7Y7Yytdw9LOmUFdEKbA'>TEAM <br/> INTERVIEWS</a>
        <Divider />
        <Link href='/age'>NETWORK AGE <br/> PODCAST</Link>
      </Entry>}
      {page == 'other' && <Entry className='mt1' title='OTHER'>
        <a target='_blank' href='https://github.com/uqbar-dao'>GITHUB</a>
        <Divider />
        <a target='_blank' href='https://urbit.org/organizations/uqbar'>APPLICATIONS</a>
        <Divider />
        <Row>
          <a>URBIT </a>
            <CopyIcon text='~hocwyn-tipwex/uqbar-event-horizon-forever' />
        </Row>
      </Entry>}
    </Col>

    <Col className='tabs'>
      <Row onClick={()=> setPage('general')} className={`tab ${classNames({ isMobile, active: page == 'general' })}`}>GENERAL</Row>
      <Row onClick={()=> setPage('apps')} className={`tab ${classNames({ isMobile, active: page == 'apps' })}`}>APPS</Row>
      <Row onClick={()=> setPage('blog')} className={`tab ${classNames({ isMobile, active: page == 'blog' })}`}>CONTENT</Row>
      <Row onClick={()=> setPage('other')} className={`tab ${classNames({ isMobile, active: page == 'other' })}`}>OTHER</Row>
    </Col>
  </Row>
  <Row between className='socials'> 
    <a target='_blank' href='https://discord.gg/G5VVqtjbVG'><FaDiscord /></a>
    <a target='_blank' href='https://github.com/uqbar-dao'><FaGithub /></a>
    <a target='_blank' href='https://twitter.com/uqbarnetwork'><FaTwitter /></a>
    <a target='_blank' href='https://uqbarnetwork.medium.com/'><FaMedium /></a>
    <a target='_blank' href='https://t.me/uqbarnetwork'><FaTelegram /></a>
  </Row>
</Col>
}

export default Menu