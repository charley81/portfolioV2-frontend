import React from 'react'
import Title from './title'
import Blog from './blog'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div
        className="section-center blogs-center"
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
          grid-gap: 1rem;
        `}
      >
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}
export default Blogs
