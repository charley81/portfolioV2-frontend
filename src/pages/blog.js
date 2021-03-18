import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Blogs from '../components/blogs'

const blogPage = ({
  data: {
    allStrapiBlog: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section>
        <Blogs blogs={blogs} title="Blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlog {
      nodes {
        slug
        category
        content
        date(formatString: "MMMM Do, YYYY")
        description
        id
        title
        image {
          childImageSharp {
            gatsbyImageData(
              height: 250
              width: 250
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default blogPage
