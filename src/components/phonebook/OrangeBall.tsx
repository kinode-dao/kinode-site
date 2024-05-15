import Col from "../spacing/Col"
import Text from '../../components/text/Text'
import { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { isMobileCheck } from "../../utils/dimensions"
import './OrangeBall.scss'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import Row from "../spacing/Row"

export const OrangeBall: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    {
      header: 'A General Purpose Sovereign Cloud Computer',
      text: 'Kinode OS combines the power of decentralized infrastructure with the flexibility of personal computing. Read and write to chain, run local AI, and build a sovereign network—all on a single integrated system. ',
    },
    {
      header: 'A Bespoke Internet Experience',
      text: 'Explore the web from the comfort of your personal node. Control your data, own your applications, build your perfect internet.',
    },
    {
      header: 'Portable, Scalable, Usable',
      text: 'Kinode OS is a virtual machine designed to run anywhere, onboard millions of users, and support dozens of programming languages. Enjoy robust cloud processing and data storage without corporate intermediaries.',
    }
  ]

  const isMobile = isMobileCheck();

  return <Col
    className={classNames('page orange', { isMobile })}
  >
    <Col
      className="circle"
      style={{
        transform: `translate(-50%, -50%) scale(${isMobile ? 1 : 2})`
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
    {texts.map((text, index) => <Col
      className={classNames('circle-text', { isMobile })}
      key={text.header}
      style={{
        transition: 'all 0.5s ease-in-out',
        opacity: textIndex === index ? 1 : 0,
      }}
    >
      <h1>
        {text.header}
      </h1>
      <Text>
        {text.text}
      </Text>
    </Col>)}
    <Row between
      className="buttons">
      <button
        className="button clear"
        onClick={() => setTextIndex((textIndex - 1 + texts.length) % texts.length)}
      >
        <FaChevronLeft />
      </button>
      <button
        className="button clear"
        onClick={() => setTextIndex((textIndex + 1 + texts.length) % texts.length)}
      >
        <FaChevronRight />
      </button>
    </Row>
  </Col>
}