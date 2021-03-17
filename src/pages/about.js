import React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import Title from '../components/title'

const aboutPage = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]
  const profileImage = getImage(image)
  return (
    <Layout>
      <section>
        <div className="section-center about-center">
          <GatsbyImage image={profileImage} alt={title} />
          <div className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          name
        }
        title
        info
        image {
          childImageSharp {
            gatsbyImageData(
              height: 400
              width: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default aboutPage
