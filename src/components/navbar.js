import React from 'react'
import { css } from '@emotion/react'

const Navbar = () => {
  return (
    <nav
      css={css`
        h1 {
          font-family: 'Satisfy', cursive;
        }
      `}
    >
      <h1>Chris Harley</h1>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </nav>
  )
}

export default Navbar
