import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'
import { css } from '@emotion/react'

const Project = ({ description, title, index, image, url, github, stack }) => {
  const projectImage = getImage(image)

  return (
    <article
      css={css`
        display: grid;
        margin-bottom: 4rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        &:hover {
          .project-img::after {
            opacity: 0;
          }
        }

        .project-img {
          border-radius: 3px 3px 0 0;
          height: 19rem;
          z-index: 1;
        }

        .project-img::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom right,
            var(--primaryColor),
            var(--secondaryColor)
          );
          opacity: 0.85;
          transition: var(--transition);
        }

        .project-info {
          padding: 1rem;
          border-radius: 0 0 3px 3px;
        }

        .count {
          color: var(--primaryColor);
        }

        h3 {
          margin: 1rem 0;
        }

        .project-stack {
          margin: 1rem 0;
        }

        .project-links {
          a {
            font-size: 1.75rem;
            color: var(--primaryColor);
            padding-right: 1rem;
          }
        }

        @media screen and (min-width: 768px) {
          .project-img {
            height: 22rem;
          }
        }

        @media screen and (min-width: 990px) {
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          box-shadow: none;

          .project-img {
            grid-column: 1 / span 8;
            grid-row: 1 / 1;
            height: 30rem;
            border-radius: var(--borderRadius);
          }

          .project-info {
            z-index: 1;
            grid-column: 5 / 12;
            grid-row: 1 / 1;
            background: var(--secondaryColor);
            border-radius: var(--borderRadius);
          }
        }
      `}
    >
      {image && (
        <GatsbyImage image={projectImage} alt={title} className="project-img" />
      )}
      <div className="project-info">
        <span className="count">0{index + 1}</span>
        <h3>{title || 'default title'}</h3>
        <p>{description}</p>
        <div className="project-stack">
          <h4>Tech Used:</h4>
          {stack.map(item => {
            return <span key={item.id}>{item.name} |</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer">
            <AiOutlineGithub />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <AiOutlineLink />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
