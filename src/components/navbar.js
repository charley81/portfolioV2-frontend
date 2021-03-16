import React from 'react'
import { css } from '@emotion/react'
import { AiOutlineAlignRight } from 'react-icons/ai'
import pageLinks from '../constants/links'
import { Link } from 'gatsby'

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav
      css={css`
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        background-color: var(--primaryColor);
        color: var(--lightColor);

        a {
          color: var(--lightColor);
          transition: var(--transition);

          &:hover {
            border-bottom: 0.5rem solid var(--secondaryColor);
            color: var(--secondaryColor);
          }
        }

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

        h3 {
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

          @media screen and (min-width: 500px) {
            font-size: 1.5rem;
          }

          @media screen and (min-width: 768px) {
            font-size: 1.8rem;
          }

          @media screen and (min-width: 1100px) {
            font-size: 2rem;
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

        @media screen and (min-width: 768px) {
          button {
            font-size: 2rem;
            display: none;
          }

          ul {
            display: flex;
            justify-content: flex-end;
          }

          li {
            margin-right: 2rem;
          }

          .nav-center {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
          }
        }
      `}
    >
      <div className="nav-center">
        <div className="nav-header">
          <h3>Chris Harley</h3>
          <button type="button" onClick={toggleSidebar}>
            <AiOutlineAlignRight />
          </button>
        </div>
        <ul>
          {pageLinks.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url} activeClassName="active">
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
