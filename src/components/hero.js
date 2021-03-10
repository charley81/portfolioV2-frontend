import React from 'react'
import { Link } from 'gatsby'
import SocialLinks from '../constants/social-links'
import { css } from '@emotion/react'

const Hero = () => {
  return (
    <header
      css={css`
        height: 100vh;
        display: flex;
        align-items: center;
        margin-top: -5rem;

        ul {
          display: flex;
          margin-top: 2rem;

          a {
            color: var(--secondaryColor);
            margin-right: 2rem;
            font-size: 1.75rem;
            padding: 0.75rem;
            background: var(--primaryColor);
            border-radius: 50%;
            display: flex;
            align-items: center;
            transition: var(--transition);

            &:hover {
              background: var(--secondaryColor);
              color: var(--primaryColor);
            }
          }
        }

        p {
          margin: 1rem 0;
        }

        .btn {
          margin-top: 1rem;
        }
      `}
    >
      <div className="hero-info">
        <h1>Chris Harley</h1>
        <p>
          currently building extremely fast, highly secure, SEO optimized
          jamstack sites
        </p>
        <Link to="/contact" className="btn">
          contact me
        </Link>
        <SocialLinks />
      </div>
    </header>
  )
}

export default Hero
