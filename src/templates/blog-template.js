import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const BlogTemplate = ({ data }) => {
  const { content } = data.strapiBlog

  return (
    <Layout>
      <section>
        <div className="section-center">
          <article>
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            Blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    strapiBlog(slug: { eq: $slug }) {
      content
      title
      description
      category
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

export default BlogTemplate
