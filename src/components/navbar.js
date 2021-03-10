import React from 'react'
import { css } from '@emotion/react'
import { AiOutlineAlignRight } from 'react-icons/ai'
import PageLinks from '../constants/links'

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        z-index: 999;

        .nav-center {
          width: 90vw;
          max-width: var(--maxWidth);
          margin: 0 auto;
        }

        .nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h1 {
          font-family: var(--handwriting);
        }

        ul {
          display: none;
        }

        button {
          font-size: 2rem;
          background: transparent;
          border-color: transparent;
          color: var(--primaryColor);
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            color: var(--darkColor);
          }
        }
      `}
    >
      <div className="nav-center">
        <div className="nav-header">
          <h1>Chris Harley</h1>
          <button type="button" onClick={toggleSidebar}>
            <AiOutlineAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
