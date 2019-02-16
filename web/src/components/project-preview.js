import { Link } from 'gatsby'
import React from 'react'
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
          <figure className={cn(styles.figure, styles.projectThumb)}>
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(700)
                .height(Math.floor((9 / 16) * 600))
                .fit('crop')
                .url()}
              alt={props.mainImage.alt}
            />
          </figure>
        )}
        <h3 className={responsiveTitle3}>
          {props.title} {props.betaProject && (<span className={styles.beta}>Beta</span>)}
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
