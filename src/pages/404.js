import * as React from 'react'
import { Link } from 'gatsby'

// markup
const errorPage = () => {
  return (
    <main>
      <h3>Something we wrong...</h3>
      <Link to="/">back home</Link>
    </main>
  )
}

export default errorPage
