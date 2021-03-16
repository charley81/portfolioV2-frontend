import React from 'react'
import socialLinks from '../constants/social-links'
import { css } from '@emotion/react'

const Footer = () => {
  return (
    <div
      css={css`
        background: var(--darkColor);
        color: var(--lightColor);
        text-align: center;
        padding: 1rem;

        span {
          color: var(--secondaryColor);
        }

        .links {
          display: flex;
          justify-content: center;
        }

        a {
          color: var(--secondaryColor);
          font-size: 1.5rem;
          margin: 0 1rem;
        }

        .info {
          margin-top: 1rem;
        }
      `}
    >
      <div className="links">
        {socialLinks.map(link => {
          return (
            <li>
              <a href={link.url}>{link.icon}</a>
            </li>
          )
        })}
      </div>
      <div className="info">
        <p>
          Copyright&copy;{new Date().getFullYear()} <span>Chris Harley </span>
        </p>
      </div>
    </div>
  )
}

export default Footer
