import React, { useEffect, useState } from 'react'
import Col from '../spacing/Col'
import { Looney } from '../Looney'
import hil2 from '../../assets/img/hil2.webp'
import humInLounge from '../../assets/img/hum-in-lounge.webp'
import flowercave from '../../assets/img/flowercave.webp'

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean
  size?: string
  images?: string[]
}

const Loader: React.FC<LoaderProps> = ({
  dark = false,
  size,
  images,
  ...props
}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    images = images || [hil2, flowercave, humInLounge];
    let loadedImages = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        if (loadedImages >= (images || []).length) {
          setLoading(false);
        }
      };
    });
  }, []);


  return <Col
    className='loader'
    style={{
      opacity: loading ? 1 : 0,
      visibility: loading ? 'visible' : 'hidden',
    }}
  >
    <Looney />
  </Col>
}

export default Loader
