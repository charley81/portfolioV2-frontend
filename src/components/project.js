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
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.25rem;
          text-align: center;

          span {
            background: var(--secondaryColor);
            color: var(--darkColor);
            border-radius: var(--borderRadius);
          }
        }

        .project-links {
          a {
            font-size: 1.75rem;
            color: var(--primaryColor);
            padding-right: 1rem;
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
          {stack.map(item => {
            return <span key={item.id}>{item.name}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank">
            <AiOutlineGithub />
          </a>
          <a href={url} target="_blank">
            <AiOutlineLink />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
