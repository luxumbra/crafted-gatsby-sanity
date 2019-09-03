import React from 'react'
import { Link } from 'gatsby'
import { cn } from '../lib/helpers'
// import { imageUrlFor } from '../lib/image-url'

import styles from './site-intro.module.css'

function SiteIntro () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.brand}>
          <img className={styles.logo} src='./assets/img/logo.svg' alt='Crafted logo' />
        </div>
      </div>

      <div className={styles.lead}>
        <span className={cn(styles.typed, 'typed')} />
      </div>

      <div className={styles.precis}>
        <blockquote cite='https://www.linkedin.com/in/stefankruger'>
          Dave was a rock - dependable, self-motivated and crucially a calm and patient mentor for
          less experienced team members. Dave has a passion and pride in doing the right thing, and
          not just what is expedient and this had a real impact on the quality of the products we
          were building. If the opportunity presented itself I would not hesitate hiring him again.
          <footer>
            - <cite>Stefan Kruger, Development team manager @ Future Publishing</cite>
          </footer>
        </blockquote>
        <blockquote cite='https://www.linkedin.com/in/pauloamgomes'>
          I've had the pleasure to be working with Dave for the last months in an exciting and
          challenging project. Dave worked in the team has a remote FE developer and has been
          passionate, dedicated and available, able to deal with complex requirements on the FE and
          making things happen. That's the type of person you want on your project.
          <footer>
            - <cite>Paulo Gomes, Development Lead @ Appnovation</cite>
          </footer>
        </blockquote>
      </div>
      <a
        data-scroll
        href='#latest-projects'
        className={cn('btn pulse', styles.primaryBtn)}
        title='More arrow'
        aria-hidden='true'
      >
        <span className='' />
      </a>
    </div>
  )
}

export default SiteIntro
