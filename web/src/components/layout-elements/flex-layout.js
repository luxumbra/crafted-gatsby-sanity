import React from 'react'
import PropTypes from 'prop-types'
//
import { cn } from '../../lib/helpers'
//
import styles from './flex-layout.module.css'

const FlexLayout = ({ children }) => (
  <>
    <div className={cn(styles.root)}>{children}</div>
  </>
)

export default FlexLayout
