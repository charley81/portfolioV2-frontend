import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Blog = ({ content, data, description, id, image, key, slug }) => {
  const blogImage = getImage(image)

  return (
    <Link to={`/blogs/${slug}`}>
      <article>blog component</article>
    </Link>
  )
}

export default Blog
