import { Link } from 'gatsby'
import React from 'react'
import Image from 'gatsby-image'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import { responsiveTitle3 } from './typography.module.css'
import styles from './project-preview.module.css'

function ProjectPreview (props) {
  return (
    <div className={cn(styles.root, styles.projectSummary)}>
      <Link to={`/project/${props.slug.current}`}>
        {props.mainImage && props.mainImage.asset && (
          <div className={cn(styles.figure, styles.projectThumb)}>
            <picture>
              {console.log(props.mainImage.asset.fluid.srcSetWebp)}
              {/* <source
                srcSet={imageUrlFor(buildImageObj(props.mainImage))
                  .width(320)
                  .height(Math.floor((9 / 16) * 320))
                  .url()}
                sizes='(max-width: 450px) 320px, 100vw'
              />
              <source
                srcSet={imageUrlFor(buildImageObj(props.mainImage))
                  .width(650)
                  .height(Math.floor((9 / 16) * 650))
                  .url()}
                sizes='(max-width: 675px) 675px'
              />
              <source
                srcSet={imageUrlFor(buildImageObj(props.mainImage))
                  .width(450)
                  .height(Math.floor((9 / 16) * 450))
                  .url()}
                sizes='(max-width: 899px) 500px, 100vw'
              />
              <source
                srcSet={imageUrlFor(buildImageObj(props.mainImage))
                  .width(600)
                  .height(Math.floor((9 / 16) * 600))
                  .url()}
                sizes='(min-width: 900px) 700px, 100vw'
              />
              <img
                src={imageUrlFor(buildImageObj(props.mainImage))
                  .width(700)
                  .height(Math.floor((9 / 16) * 700))
                  .url()}
                alt={props.mainImage.alt}
              /> */}
              {/* <Image
                fluid={props.mainImage.asset.fluid}
                alt={props.mainImage.alt}
                className={styles.projectThumb}
                srcSetWebp={props.mainImage.asset.fluid.srcSetWebp}
              /> */}
              <img
                src={imageUrlFor(buildImageObj(props.mainImage))
                  .width(600)
                  .height(Math.floor((9 / 16) * 600))
                  .url()}
                alt={props.mainImage.alt}
              />
            </picture>
          </div>
        )}
        <h3 className={responsiveTitle3}>
          {props.title} {props.betaProject && <span className={styles.beta}>Beta</span>}
        </h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}
        <ul className={styles.projectList}>
          <li className={styles.info}>
            <i data-feather='user' /> <span>Role in project: {props.role}</span>
          </li>
          <li className={styles.info}>
            <i data-feather='package' /> <span>Technology used: {props.technology}</span>
          </li>
          <li className={styles.info}>
            <i data-feather='star' /> <span>Highlights: {props.highlights}</span>
          </li>
          <li className={styles.info}>
            <i data-feather='at-sign' /> <span>Client/Employer: {props.client}</span>
          </li>
        </ul>
      </Link>
    </div>
  )
}

export default ProjectPreview
