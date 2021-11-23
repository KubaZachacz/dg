import React from 'react'

import { scroller } from 'react-scroll';

const Link = ({ to, scroll, ...props }) => {
  const onClick = (e) => {
    e.preventDefault();

    if (document.location.pathname !== to) {
      document.location.href = `${to}#${scroll}`
    } else {
      console.log('scroll')
      scroller.scrollTo(scroll, {
        offset: -50
      })
    }
  }

  return (
    <a onClick={onClick} {...props} />
  )
}

export default Link
