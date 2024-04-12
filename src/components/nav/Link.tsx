import classNames from 'classnames';
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import './Link.scss'

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  type?: string
  external?: boolean
  underline?: boolean
  target?: string
}

const Link: React.FC<LinkProps> = ({
  href,
  external,
  type = '',
  underline = false,
  ...props
}) => {
  const [hovered, setHovered] = useState(false)
  const { className, ...rest } = props
  const classes = classNames('link', type, className, { underline, hovered })

  return (
    external ? <a
      href={href}
      {...rest}
      className={classes}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.children}
    </a>
      : <RouterLink
        to={href}
        {...rest}
        className={classes}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {props.children}
      </RouterLink>
  )
}

export default Link
