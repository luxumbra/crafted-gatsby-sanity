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
          <figure className={styles.figure}>
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .url()}
              alt={props.mainImage.alt}
              className={styles.projectThumb}
            />
          </figure>
        )}
        <h3 className={responsiveTitle3}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}
        <ul>
          <li><i data-feather="user"></i> <span>Role in project: { props.role }</span></li>
          <li><i data-feather="package"></i> <span>Technology used: { props.technology }</span></li>
          <li><i data-feather="star"></i> <span>Highlights: { props.highlights }</span></li>
          <li><i data-feather="at-sign"></i> <span>Client/Employer: { props.client }</span></li>
        </ul>
      </Link>
    </div>
  )
}

export default ProjectPreview
