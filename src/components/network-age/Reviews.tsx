
import { useState } from 'react';
import Col from '../spacing/Col';
import Text from '../text/Text';
import Row from '../spacing/Row';
import Button from '../form/Button';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

const Reviews: React.FC = () => {
  const [rindex, setRindex] = useState(0);
  const attestations: any[] = [
    {
      username: 'Heraclitus of Ephesus',
      review: `An essential podcast for anyone captivated by the future of technology and its influence on society.`
    },
    {
      username: 'jsw2666',
      review: `This is one of the best podcasts out there, exploring the frontiers of the latest revolution in technology. They also manage to wrangle an amazing slate of guests.`
    },
    {
      username: 'aellsworth5050',
      review: `Thoughtful, intelligent discussion with a diverse selection of guests and topics without glossing over any of the nuance or being afraid to push back. Also notable for bringing a lot of non-US-based perspectives that you don’t hear in other pods.`
    },
    {
      username: 'TherealKennyrowe',
      review: `Smart with lots of subtle alpha. Every week this podcast gets better and better.`
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
      <Row className='buttons'>
        <Button variant='unstyled' iconOnly icon={<FaChevronLeft />} onClick={prevReview}>Previous</Button>
        <Button variant='unstyled' iconOnly icon={<FaChevronRight />} onClick={nextReview}>Next</Button>
      </Row>
      <Row className='carousel'>
        <FaQuoteLeft size={32} className='icon' />
        <Col className='att'>
          <Text className='review'>{attestations[rindex].review}</Text>
          <Text className='username'>{attestations[rindex].username}</Text>
        </Col>
        <FaQuoteRight size={32} className='icon' />
      </Row>
    </Col>
  );
};

export default Reviews;


/**
 * 
 


 */