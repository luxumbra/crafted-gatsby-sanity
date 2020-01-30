import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProjectTemplateQuery($id: String) {
    project: sanityProject(id: { eq: $id }) {
      id
      _id
      publishedAt
      projectURL
      categories {
        _id
        title
      }
      relatedProjects {
        _id
        title
        slug {
          current
        }
      }
      mainImage {
        asset {
          _id
          metadata {
            lqip
            dimensions {
              aspectRatio
            }
          }
          fluid(maxWidth: 1900) {
            ...GatsbySanityImageFluid
          }
          fixed {
            ...GatsbySanityImageFixed
          }
          url
        }
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      members {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`
const ProjectTemplate = props => {
  const { data, errors } = props
  const project = data && data.project
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && (
        <Container page="project">
          <Project {...project} />
        </Container>
      )}
    </Layout>
  )
}

export default ProjectTemplate
