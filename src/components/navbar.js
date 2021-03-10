import React from 'react'
import { css } from '@emotion/react'
import { AiOutlineAlignRight } from 'react-icons/ai'
import PageLinks from '../constants/links'

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav
      css={css`
        width: 100%;
        height: 4rem;
        display: flex;
        align-items: center;
        background-color: var(--primaryColor);
        color: var(--lightColor);

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
          margin-bottom: 0;
          background: -webkit-linear-gradient(
            left,
            var(--lightColor),
            var(--secondaryColor)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: var(--transition);
          cursor: pointer;

          &:hover {
            background: -webkit-linear-gradient(
              left,
              var(--lightColor),
              var(--lightColor)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        ul {
          display: none;
        }

        button {
          font-size: 2rem;
          background: transparent;
          border-color: transparent;
          color: var(--secondaryColor);
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            color: var(--lightColor);
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
