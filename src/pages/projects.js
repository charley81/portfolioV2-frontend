import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Projects from '../components/projects'

const projectsPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <Layout>
      <Projects projects={projects} title="All Projects" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            gatsbyImageData
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

export default projectsPage
