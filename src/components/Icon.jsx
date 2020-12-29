import React from 'react'
import styles from './Icon.module.css'

const Icon = ({ link, icon, alt }) => {
  return (
    <a href={ link } target='_blank' rel='noreferrer'>
      <img className={styles.icon} src={ icon } alt={ alt } />
    </a>
  )
}

export default Icon