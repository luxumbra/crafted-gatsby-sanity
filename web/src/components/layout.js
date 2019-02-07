import React from 'react'
import { cn } from '../lib/helpers'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div id='content' className={cn(styles.grid, styles.content)}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        {/* <div className={styles.companyAddress}>
          {companyInfo && (
            <p>
              {companyInfo.name} - {companyInfo.city} {companyInfo.zipCode} {companyInfo.country}
            </p>
          )}
        </div> */}
        <ul>
          <li><a href="#home"><i data-feather="home">Home</i></a></li>
          <li><a href="tel:+44 7507 481812" className={styles.navLink}><i data-feather="phone">Phone</i> <span className="d-none d-lg-inline">+44 7507 481812</span></a></li>
          <li><a href="mailto:hello@crafted.im" className={styles.navLink}><i data-feather="mail">Email</i> <span className="d-none d-lg-inline">hello@crafted.im</span></a></li>
          <li><a href="https://linkedin.com/in/davesayerfreelancer" className={styles.navLink}><i data-feather="linkedin">LinkedIn</i> <span className="d-none d-lg-inline">Dave Sayer</span></a></li>
          <li><a href="https://github.com/luxumbra" className={styles.navLink}><i data-feather="github">GitHub</i> <span className="d-none d-lg-inline">@luxumbra</span></a></li>
        </ul>
        {/* <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div> */}
      </div>
    </footer>
  </>
)

export default Layout
