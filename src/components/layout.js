import React from 'react'
import { Global, css } from '@emotion/react'
import PropTypes from 'prop-types'
import globalStyles from '../styles/global-styles'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div
      className="site"
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        main {
          max-width: var(--maxWidth);
          margin: auto;
          padding: 1rem;
          flex-grow: 1;
        }
      `}
    >
      <Global styles={globalStyles} />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
