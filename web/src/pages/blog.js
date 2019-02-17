import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import aside from '../components/aside.module.css'
import categories from '../components/blog-categories.module.css'
import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title='Blog' />
      <h1 className={responsiveTitle1}>Blog</h1>
      <Container page='blog'>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
      <aside className={aside.root}>
        <div className={categories.categoryList}>
          <h3 className={categories.categoryTitle}>Categories</h3>
          <ul className={aside.asideList}>
            <li>
              <a href='.'>Web Dev</a>
            </li>
            <li>
              <a href='.'>Isle of Man</a>
            </li>
            <li>
              <a href='.'>Life</a>
            </li>
            <li>
              <a href='.'>React</a>
            </li>
            <li>
              <a href='.'>Front-end code</a>
            </li>
          </ul>
        </div>
      </aside>
    </Layout>
  )
}

export default BlogPage
