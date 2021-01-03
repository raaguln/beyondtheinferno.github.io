import React from 'react'
import { animated as a } from 'react-spring'
import styles from './Icon.module.css'

const Icon = ({ link, icon, alt, spring }) => {
  return (
    <a.a className={styles.container} href={ link } target='_blank' rel='noreferrer'
      style={{
        opacity: spring.opacity,
        transform: spring.transform.interpolate(y => `translate(0, ${y}px)`)
      }}
    >
      <img className={styles.icon} src={ icon } alt={ alt } />
    </a.a>
  )
}

export default Icon