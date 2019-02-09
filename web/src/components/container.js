import React from 'react'

import styles from './container.module.css'

const Container = ({ page, children }) => {
  return <div className={styles.root} page={page}>{children}</div>
}

export default Container
