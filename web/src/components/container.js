import React from 'react'
//
import { cn } from '../lib/helpers'
//
import styles from './container.module.css'

const Container = ({ page, fluid, children }) => {
  const containerFluid = <div className={cn(styles.root, styles.fluid)} page={page}>{children}</div>
  const container = <div className={styles.root} page={page}>{children}</div>
  return (
    fluid ? containerFluid : container
  )
}

export default Container
