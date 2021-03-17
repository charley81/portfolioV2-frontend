import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const errorPage = () => {
  return (
    <Layout>
      <section className="section">
        <h1>Something we wrong...</h1>
        <Link to="/" className="btn center-btn">
          back home
        </Link>
      </section>
    </Layout>
  )
}

export default errorPage
