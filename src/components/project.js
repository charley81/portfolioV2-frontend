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

        &:hover {
          .project-img::after {
            opacity: 0;
          }
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
      `}
    >
      {image && (
        <GatsbyImage image={projectImage} alt={title} className="project-img" />
      )}
      <div className="project-info">
        <span>0{index + 1}</span>
        <h3>{title || 'default title'}</h3>
        <p>{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.name}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <AiOutlineGithub />
          </a>
          <a href={url}>
            <AiOutlineLink />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
