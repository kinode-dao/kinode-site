import classNames from 'classnames';
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import './Link.scss'
import * as Scroll from 'react-scroll'

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  type?: string
  external?: boolean
  underline?: boolean
  target?: string
  scrollToTop?: boolean
}

const Link: React.FC<LinkProps> = ({
  href,
  external,
  type = '',
  underline = false,
  scrollToTop,
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
      onClick={() => scrollToTop && Scroll.animateScroll.scrollToTop()}
    >
      {props.children}
    </a>
      : <RouterLink
        to={href}
        {...rest}
        className={classes}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => scrollToTop && Scroll.animateScroll.scrollToTop()}
      >
        {props.children}
      </RouterLink>
  )
}

export default Link
