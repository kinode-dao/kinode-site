import looney1 from '../assets/img/looneytunes1.webp'
import looney2 from '../assets/img/looneytunes2.svg'
import looney3 from '../assets/img/looneytunes3.svg'
import Col from './spacing/Col'

export const Looney = () => {
  return <Col className='looney'>
    <img src={looney1} alt='looney tunes 1' className='l l1' />
    <img src={looney2} alt='looney tunes 2' className='l l2' />
    <img src={looney3} alt='looney tunes 3' className='l l3' />
  </Col>
}