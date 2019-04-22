import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import styles from './project.module.css'

function Project (props) {
  const {
    _rawBody,
    title,
    categories,
    mainImage,
    members,
    projectURL,
    publishedAt,
    relatedProjects
  } = props
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        // <div className={styles.mainImage}>
        //    <Img
        //     fluid={imageUrlFor(buildImageObj(mainImage))
        //       .width(1200)
        //       .height(500)
        //       .fit('crop')
        //       .url()}
        //     alt={mainImage.alt}
        //   />
        // </div>
        <Image fluid={mainImage.asset.fluid} alt={mainImage.alt} className={styles.mainImage} />
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {/* {publishedAt && (
              <div className={styles.publishedAt}>
                <p>
                  This p was published &nbsp;
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM Do YYYY')}
                </p>
              </div>
            )} */}
            <div className={styles.viewSiteNav}>
              <a href={projectURL} rel='noopener'>Visit the website</a>
            </div>
            {members && <RoleList items={members} title='Project team' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul className={styles.asideList}>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul className={styles.asideList}>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Project
