import React from 'react'
import { Link } from 'gatsby'
//
import styles from './simple-page-layout.module.css'

const SimplePageLayout = ({ page, children }) => (
  <>
    <section className={styles.root}>{children}</section>
  </>
)

export default SimplePageLayout
