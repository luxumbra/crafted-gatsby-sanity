import React from 'react'
import { Link } from 'gatsby'
//
import styles from './company-contact.module.css'

const CompanyContact = () => (
  <>
    <div className={styles.root}>
      <ul>
        <li>Office: <a href='tel:+447507481812'>+44 7507 481812</a></li>
        <li>Mobile: <a href='tel:+447507481812'>+44 7507 481812</a></li>
        <li>Email: <a href='mailto:hello@crafted.im'>hello@crafted.im</a></li>
        <li>Crafted Web Services Ltd, Peel, Isle of Man, IM5 1JD</li>
      </ul>
    </div>
  </>
)

export default CompanyContact
