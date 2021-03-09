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
    </nav>
  )
}

export default Navbar
