import classNames from 'classnames'
import React from 'react'
import GoAway from '../nav/GoAway'
import Col from '../spacing/Col'

import './Card.scss'

interface CardProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  href?: string
  className?: string
}

const Card: React.FC<CardProps> = ( { href, className, children, ...props }) => {
    const card = <Col className={classNames('card', className)} {...props}>
      {children}
      {href && <GoAway />}
    </Col>
  return href ? <a target='_blank' href={href} {...props}>{card}</a>
              : card
  
}

export default Card