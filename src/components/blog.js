import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

const Blog = ({ category, date, description, image, slug, title }) => {
  const blogImage = getImage(image)

  return (
    <Link to={`/blogs/${slug}`}>
      <article>
        {image && <GatsbyImage image={blogImage} alt={title} />}
      </article>
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  )
}

export default Blog
