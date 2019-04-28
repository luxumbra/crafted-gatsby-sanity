import React from 'react'
//
import { cn } from '../lib/helpers'
//
import styles from './contact-form.module.css'

class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      isSending: false,
      hasSent: false
    }
  }

  render () {
    return (
      <div className={cn(styles.root)}>
        <form name='contactCrafted' method='POST' data-netlify='true'>
          <p>
            <label>
              <span className={styles.label}>Your Name:</span>{' '}
              <span className={styles.control}>
                <input type='text' name='name' />
              </span>
            </label>
          </p>
          <p>
            <label>
              <span>Your Email:</span>{' '}
              <span>
                <input type='email' name='email' />
              </span>
            </label>
          </p>
          {/* <p>
          <label>
            Your Role:{' '}
            <select name='role[]' multiple>
              <option value='leader'>Leader</option>
              <option value='follower'>Follower</option>
            </select>
          </label>
        </p> */}
          <p>
            <label>
              <span className={styles.label}>Message:</span>
              <span className={styles.control}>
                <textarea name='message' />
              </span>
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
      </div>
    )
  }
}

export default ContactForm
