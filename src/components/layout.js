import React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import globalStyles from '../styles/global-styles'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
