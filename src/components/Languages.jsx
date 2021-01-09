import React from 'react'
import { animated as a } from 'react-spring'
import styles from './Languages.module.css'

const Languages = ({ logo, alt, text, left, opacity, color }) => {
  return(
    <a.div className={styles.languagesContainer}
      style={{
        position: 'absolute',
        left: left.interpolate(x => `${x}vw`),
        opacity: opacity,
        backgroundColor: 'black'
      }}
    >
      <img className={styles.languageLogo} src={ logo } alt={ alt } />
      <p className={styles.languageText} style={{ color }}>{ text }</p>
    </a.div>
  )
}

export default Languages