
import { useState } from 'react';
import Col from '../spacing/Col';
import Text from '../text/Text';
import Row from '../spacing/Row';
import Button from '../form/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Reviews: React.FC = () => {
  const [rindex, setRindex] = useState(0);
  const attestations: any[] = [
    { 
      username: 'Heraclitus of Ephesus', 
      review: `An essential podcast for anyone captivated by the future of technology and its influence on society. The hosts delve into an extensive range of subjects, including decentralized computing, historical trends, cryptocurrency, artificial intelligence, and the burgeoning "web3" landscape. Although the discussions venture into topics that might be on the fringe or cutting edge, they offer valuable insights into emerging trends that will soon become central to public discourse—and sooner than you might think. And the show frequently introduces a variety of niche and lesser-known guests who frankly deserve more attention and consideration. Even if you don’t know what a rune or a ship is this is still a great podcast. Big recommend.`
    },
    { 
      username: '~hanryc-tippur', 
      review: `I recommend this podcast to anyone with even a passing interest in the future of technology. They interview a wide variety of guests, which keeps the show from repeating the same themes, and also gives different perspectives for those of us that aren't great at getting out of our narrative bubbles. While the show is more generally tech focused, the hosts are heavily involved in the Urbit community, so if that’s your thing, you’ll get a healthy does of Urbit along the way too.`
    },
    { 
      username: 'aellsworth5050', 
      review: `Thoughtful, intelligent discussion with a diverse selection of guests and topics without glossing over any of the nuance or being afraid to push back. Also notable for bringing a lot of non-US-based perspectives that you don’t hear in other pods.`
    },
  ];

  const nextReview = () => {
    setRindex((rindex + 1) % attestations.length);
  };

  const prevReview = () => {
    setRindex((rindex - 1 + attestations.length) % attestations.length);
  };

  return (
    <Col className='reviews'>
      <div className='underlay'></div>
      <Text className='title'>Reviews</Text>
      <Row className='carousel'>
        <Row className='buttons'>
          <Button variant='unstyled' iconOnly icon={<FaChevronLeft />} onClick={prevReview}>Previous</Button>
          <Button variant='unstyled' iconOnly icon={<FaChevronRight />} onClick={nextReview}>Next</Button>
        </Row>
        <Col className='att'>
          <Text className='review'>{attestations[rindex].review}</Text>
          <Text className='username'>{attestations[rindex].username}</Text>
        </Col>
      </Row>
    </Col>
  );
};

export default Reviews;


/**
 * 
 


 */