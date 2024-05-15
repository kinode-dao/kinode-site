import Col from "../spacing/Col"
import Text from '../../components/text/Text'
import { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { isMobileCheck } from "../../utils/dimensions"

export const OrangeBall: React.FC = () => {
  const orangeContainerRef = useRef<HTMLDivElement | null>(null);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    {
      header: 'Global Consensus, Local Compute',
      text: 'Kinode OS combines the power of decentralized infrastructure with the security of sovereign computing. Execute smart contracts, run local AI, and message peers directly: all on a single integrated system.',
    },
    {
      header: 'Public Cloud Infrastructure',
      text: 'Enjoy lightning-quick cloud processing and data storage without corporate intermediaries. A high-bandwidth distributed network as powerful as AWS and as secure as Ethereum.',
    },
  ];

  const isMobile = isMobileCheck();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTextIndex(1); // Set to texts[1] when the element comes into view
          } else {
            setTextIndex(0); // Revert to texts[0] only when the element is completely out of view
          }
        });
      },
      {
        root: null, // viewport is the default root
        rootMargin: '-49% 0% 49% 0%', // No margin, adjust if needed to change the trigger point
        threshold: 1 // Trigger events when 0% and 100% of the target is visible
      }
    );

    if (orangeContainerRef.current) {
      observer.observe(orangeContainerRef.current);
    }

    return () => {
      if (orangeContainerRef.current) {
        observer.unobserve(orangeContainerRef.current);
      }
    };
  }, [orangeContainerRef]);

  return <Col
    className={classNames('page orange', { isMobile })}
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
    {texts.map((text, index) => <Col
      className={classNames('circle-text', { isMobile })}
      key={text.header}
      innerRef={orangeContainerRef}
      style={{
        transition: 'all 0.5s ease-in-out',
        opacity: textIndex === index ? 1 : 0,
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