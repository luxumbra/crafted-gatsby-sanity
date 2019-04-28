import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
//
import styles from './simple-page-layout.module.css'

const SimplePageLayout = ({ layout, page, children }) => (
  <>
    {console.log(children)}
    <section className={styles.root}>{children}</section>
  </>
)

SimplePageLayout.defaultProps = {
  layout: 'single'
}

SimplePageLayout.defaultProps = {
  layout: PropTypes.string,
  page: PropTypes.object,
  children: PropTypes.object
}

export default SimplePageLayout
