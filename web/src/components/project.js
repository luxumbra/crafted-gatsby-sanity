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

function Project(props) {
  const {
    _rawBody,
    title,
    categories,
    mainImage,
    members,
    projectURL,
    endedAt,
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
            {endedAt && (
              <div className={styles.projectMeta}>
                <span className={styles.projectLaunch}>
                  {' '}
                  Project launched: &nbsp;
                  {differenceInDays(new Date(endedAt), new Date()) > 3
                    ? distanceInWords(new Date(endedAt), new Date())
                    : format(new Date(endedAt), 'MMM YYYY')}
                </span>
              </div>
            )}
            {_rawBody && <BlockContent blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            <div className={styles.viewSiteNav}>
              <a href={projectURL} rel="noopener">
                Visit the website
              </a>
            </div>

            {members && members.length > 0 && <RoleList items={members} title="Project team" />}

            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul className={styles.asideList}>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}

            {relatedProjects && relatedProjects.length > 0 && (
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
