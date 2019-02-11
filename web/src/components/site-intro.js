import React from 'react'
import { Link } from 'gatsby'
import { cn } from '../lib/helpers'
// import { imageUrlFor } from '../lib/image-url'

import styles from './site-intro.module.css'

function SiteIntro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.brand}>
          <img className={styles.logo} src="./img/logo.svg" alt="Crafted logo" />
        </div>
      </div>

      <div className={styles.lead}>
        <span id="typed" className={cn(styles.typed, `typed typed-fade-out`)} typed />
      </div>

      <div className={styles.precis}>
        <blockquote cite="https://www.linkedin.com/in/stefankruger">
          Dave was a rock - dependable, self-motivated and crucially a calm and patient mentor for
          less experienced team members. Dave has a passion and pride in doing the right thing, and
          not just what is expedient and this had a real impact on the quality of the products we
          were building.
          <footer>
            - <cite>Stefan Kruger, Dev team manager @ Future Publishing</cite>
          </footer>
        </blockquote>
      </div>
      <div className='row p-2 next-section'>
        <div className='col col-12'>
          <a
            data-scroll
            href='#latest-projects'
            className='btn primary-btn pulse'
            title='More arrow'
            aria-hidden='true'
          >
            <span className='' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SiteIntro
