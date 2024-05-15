import Col from "../spacing/Col"
import Text from '../../components/text/Text'
import { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { useScroll } from "react-spring"
import { isMobileCheck } from "../../utils/dimensions"
export const OrangeBall: React.FC = () => {
  const orangecontainerref = useRef<HTMLDivElement | null>(null)
  const [textIndex, setTextIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    container: orangecontainerref as any,
    config: {
      duration: 200,
      mass: 1,
      friction: 0,
      tension: 0,
    },
    onChange: (result) => {
      const progress = result?.value?.scrollYProgress;
      if (progress >= 0.5) {
        setTextIndex(1);
      } else if (progress < 0.5) {
        setTextIndex(0);
      }
    },
    onRest(result, ctrl, item) {
      // Optionally handle any actions when scrolling stops
    },
  })

  const texts = [
    {
      header: 'Public Cloud Infrastructure',
      text: 'Enjoy lightning-quick cloud processing and data storage without corporate intermediaries. A high-bandwidth distributed network as powerful as AWS and as secure as Ethereum.',
    },
    {
      header: 'Global Consensus, Local Compute',
      text: 'Kinode OS combines the power of decentralized infrastructure with the security of sovereign computing. Execute smart contracts, run local AI, and message peers directly: all on a single integrated system.',
    }
  ]

  const isMobile = isMobileCheck()

  return <Col
    className='page orange'
    innerRef={orangecontainerref}
  >
    <Col
      style={{
        position: 'absolute',
        bottom: '50%',
        left: '50%',
        zIndex: 1,
        transform: `translate(-50%, 50%) scale(${isMobile ? 1 : 2})`
      }}
    >
      <video
        width="600"
        height="100%"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://dev.digitaldesignnyc.co/kinode/static/img/Circles-hevc-safari.mp4"
          type='video/mp4; codecs="hvc1"' />
        <source src="https://dev.digitaldesignnyc.co/kinode/static/img/Circles-vp9-chrome.webm"
          type="video/webm" />
      </video>
    </Col>
    {texts.map(text => <Col
      className={classNames('circle-text', { isMobile })}
      key={text.header}
      style={{
        transition: 'all 0.5s ease-in-out',
        opacity: textIndex === texts.indexOf(text) ? 1 : 0,
        position: 'absolute'
      }}
    >
      <h1>
        {text.header}
      </h1>
      <Text>
        {text.text}
      </Text>
    </Col>)}
  </Col>
}