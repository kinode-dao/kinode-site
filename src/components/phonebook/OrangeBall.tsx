import Col from "../spacing/Col"
import Text from '../../components/text/Text'
import { useScroll, animated, useSpring } from '@react-spring/web'
import { useEffect, useRef, useState } from "react"
import classNames from "classnames"

export const OrangeBall: React.FC = () => {
  const orangecontainerref = useRef<HTMLDivElement | null>(null)
  const [textIndex, setTextIndex] = useState(0)
  // const { scrollYProgress } = useScroll({
  //   container: orangecontainerref as any,
  //   config: {
  //     duration: 200,
  //     mass: 1,
  //     friction: 0,
  //     tension: 0,
  //   },
  //   onRest(result, ctrl, item) {
  //     if (result?.value?.scrollYProgress >= 0.9) {
  //       setTextIndex(1)
  //     }
  //   },
  // })

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
  // This creates a dynamic style object that updates the scale based on scrollYProgress
  // const circleStyle = scrollYProgress.to(scale => `
  //   translate(-50%, -50%)
  //   scale(${Math.max(1, 5 * scale)})
  // `)
  // const textStyle = scrollYProgress.to(scale => `translateY(${Math.max(0, 100 * (scale - 1))}%)`)
  return <>
    {texts.map(text => <Col
      className='page orange'
      innerRef={orangecontainerref}
    >
      <Col
        className='circle'
      />
      <Col
        className='circle-text'
      >
        <h1>
          {text.header}
        </h1>
        <Text>
          {text.text}
        </Text>
      </Col>
    </Col>)}
  </>
}

