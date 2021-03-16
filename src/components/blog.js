import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

const Blog = ({ category, date, description, image, slug, title }) => {
  const blogImage = getImage(image)

  return (
    <Link
      to={`/blogs/${slug}`}
      css={css`
        display: block;
        background: var(--secondaryColor);
        margin-bottom: 2rem;
        border-radius: var(--borderRadius);
        box-shadow: var(--boxShadowLight);
        transition: var(--transition);

        &:hover {
          transform: scale(1.02);
          box-shadow: var(--boxShadowDark);
        }

        article {
          display: grid;
          height: 100%;
          grid-template-rows: auto 1fr;
        }

        .blog-card {
          padding: 1rem;
          color: var(--darkColor);
          grid-template-row: auto 1fr auto;
        }

        .img {
          border-radius: 3px 3px 0 0;
        }

        .desc {
          margin: 1rem 0;
        }

        h4 {
          color: var(--primaryColor);
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            color: var(--primaryColor);
            border-bottom: 1px dotted var(--primaryColor);
          }
        }

        .blog-footer p:first-of-type {
          display: inline-block;
          background: var(--primaryColor);
          color: var(--secondaryColor);
          padding: 0.25rem 0.5rem;
          border-radius: var(--borderRadius);
        }
      `}
    >
      <article>
        {image && <GatsbyImage image={blogImage} alt={title} className="img" />}
        <div className="blog-card">
          <h4>{title}</h4>
          <p className="desc">{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
