import React from 'react'
import { graphql } from 'gatsby'
//
import LogRocketHelmet from '../components/log-rocket-helmet'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import PeopleGrid from '../components/people-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      _id
      title
      _rawBody
    }
    people: allSanityPerson {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
  }
`

const AboutPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const personNodes =
    data && data.people && mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs)

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <LogRocketHelmet />
      <SEO title={page.title} />
      <Container page='about'>
        <h1 className={responsiveTitle1}>{page.title}</h1>
        <BlockContent blocks={page._rawBody || []} />
        {/* <div className='row justify-content-around intro py-5'>
          <div className='col col-12'>
            <h2 className={responsiveTitle1}>What I do</h2>
          </div>
          <div className='col col-10 col-md-6 col-lg-4'>
            <h3>I develop</h3>
            <p>
              A web developer of 13 years, I work with the latest technology to build fast, secure
              and robust websites and web apps that exceed expectations. Hugo (Static Site
              Generator), React, continuous deployment, CSS preprocessors and static ecommerce
              platform SnipCart are some of the tech that I've been using. I have a passion for web
              standards, usability and just development in general - it's what I love and do best.
            </p>
          </div>
          <div className='col col-10 col-md-6 col-lg-4'>
            <h3>I design</h3>
            <p>
              13 years designing websites using mainly Adobe Photoshop and Illustrator...and wayback
              Macromedia Freehand. I have the full Adobe Creative Suite at my disposal and a
              creative mind. I think white space and typography can make or break a design. Clean
              and simple is my motto :). I also enjoy designing apps and websites in the browser
              using purely CSS and HTML.
            </p>
          </div>
          <div className='col col-10 col-md-10 col-lg-4'>
            <h3>I learn</h3>
            <p>
              I always enjoy learning and developing my skills and am currently working through two
              online courses at Udemy (The Complete Web Developer 2018 and Web Develpment Junior to
              Senior 2018) to hone and bolster my skill set after a 2 to 3 year break from full-time
              development. My current focus for learning is Vanilla JavaScript (ES6 - 8) and React
              coupled with improving my DevOps skills.
            </p>
          </div>
          <div className='col col-12 w-100' />
          <div className='col col-10 col-md-10 col-lg-8 mx-auto'>
            <h3>I use</h3>
            <ul className='tech-used d-flex flex-wrap flex-row justify-content-around justify-content-lg-center'>
              <li>
                <i className='devicon-html5-plain' />
              </li>
              <li>
                <i className='devicon-css3-plain' />
              </li>
              <li>
                <i className='devicon-javascript-plain' />
              </li>
              <li>
                <i className='devicon-bootstrap-plain' />
              </li>
              <li>
                <i className='devicon-sass-original' />
              </li>
              <li>
                <i className='devicon-react-original' />
              </li>
              <li>
                <i className='devicon-nodejs-plain' />
              </li>
              <li>
                <i className='devicon-php-plain' />
              </li>
              <li>
                <i className='devicon-mysql-plain' />
              </li>
              <li>
                <i className='devicon-github-plain' />
              </li>
              <li>
                <i className='devicon-linux-plain' />
              </li>
              <li>
                <i className='devicon-slack-plain' />
              </li>
              <li>
                <i className='devicon-visualstudio-plain' />
              </li>
            </ul>
          </div>
        </div> */}
        {personNodes && personNodes.length > 0 && <PeopleGrid items={personNodes} title='People' />}
      </Container>
    </Layout>
  )
}

export default AboutPage
