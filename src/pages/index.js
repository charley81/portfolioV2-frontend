import * as React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { graphql } from 'gatsby'
import Projects from '../components/projects'
import Blogs from '../components/blogs'

// markup
const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <Layout>
      <Hero />
      <Projects projects={projects} title="Latest Work" showLink />
      <Blogs blogs={blogs} title="Latest Blogs" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            gatsbyImageData(
              height: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        stack {
          id
          name
        }
      }
    }
    allStrapiBlog {
      nodes {
        slug
        category
        content
        data(formatString: "MMMM Do, YYYY")
        description
        id
        image {
          childImageSharp {
            gatsbyImageData(
              height: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default IndexPage
