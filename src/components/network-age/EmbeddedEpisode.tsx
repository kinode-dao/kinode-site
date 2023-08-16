import Col from '../spacing/Col'
import Text from '../text/Text'

interface EmbeddedEpisodeProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string
  title: string
}

const EmbeddedEpisode: React.FC<EmbeddedEpisodeProps> = ({ url, title, ...props }) => {
  const re = /^(.*)rss.com\/(podcasts)?\//g
  const src = url.replace(re, 'https://player.rss.com/')
  const href = url.replace(re, 'https://rss.com/')
  return (<Col className='embedded-ep' {...props}>
    {/* <Text>{url.match(re)}</Text>
    <Text>{src}</Text>
    <Text>{href}</Text> */}
    <iframe 
      src={src}
      title='rss embed thingy'
      style={{width: '100%'}}
      frameBorder='0' 
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
      allowFullScreen>
        <a href={href}> {title} </a>
    </iframe>
  </Col>)
}

export default EmbeddedEpisode


/* 
<iframe src="https://player.rss.com/thenetworkage/1053774" style="width: 100%" title="rss embed thingy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><a href="https://rss.com/podcasts/thenetworkage/1053774/">Digital Frontier in The Cowboy State (feat. Jae Yang) | RSS.com</a></iframe>

*/