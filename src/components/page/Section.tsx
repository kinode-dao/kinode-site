import React from 'react'
import Col from '../spacing/Col'

import './Section.scss'

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <Col className={'section ' + (className || '')} {...props}>
      {children}
    </Col>
  )
}

export default Section