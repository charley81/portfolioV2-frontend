import * as React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { graphql } from 'gatsby'
import Projects from '../components/projects'

// markup
const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { node: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <Projects projects={projects} title="Latest Work" showLink />
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
            fluid {
              src
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
  }
`

export default IndexPage
