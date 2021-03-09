import React from 'react'
import { css } from '@emotion/react'
import { AiOutlineAlignRight } from 'react-icons/ai'
import PageLinks from '../constants/links'

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav
      css={css`
        h1 {
          font-family: var(--handwriting);
        }
      `}
    >
      <div className="nav-center">
        <div className="nav-header">
          <h1>Chris Harley</h1>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <AiOutlineAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
