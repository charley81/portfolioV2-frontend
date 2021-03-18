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
      <section
        css={css`
          .img {
            display: block;
            margin: 1rem auto;
            border-radius: var(--borderRadius);
            box-shadow: var(--boxShadowDark);
          }

          .about-text {
            text-align: left;
            line-height: 2;
          }

          .about-stack {
            margin: 1rem 0;
            text-align: center;

            span {
              display: inline-block;
              border: 1px solid var(--primaryColor);
              color: var(--primaryColor);
              padding: 0.025rem 0.25rem;
              margin: 0.25rem 0.25rem 0 0;
              border-radius: var(--borderRadius);
              font-size: 0.75rem;
              text-transform: uppercase;
            }
          }

          @media screen and (min-width: 990px) {
            .about-center {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              align-items: center;
              column-gap: 2rem;
              margin-top: 2rem;
            }

            .img {
              grid-column: 1 / span 5;
              margin-bottom: 0;
            }

            .about-text {
              grid-column: 6 / -1;
            }
          }
        `}
      >
        <div className="section-center about-center">
          <GatsbyImage image={profileImage} alt={title} className="img" />
          <div className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.name}</span>
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
