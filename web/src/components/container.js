import React from 'react'

import styles from './container.module.css'

const Container = ({ page, children }) => {
  return <section className={styles.root} page={page}>{children}</section>
}

export default Container
