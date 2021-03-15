import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Blog = ({ category, date, description, id, image, key, slug, title }) => {
  const blogImage = getImage(image)
  console.log(title)
  return (
    <Link to={`/blogs/${slug}`}>
      <article>{image && <GatsbyImage image={blogImage} />}</article>
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
