import React from 'react'
import styles from './Fallback.module.css'

const Fallback = () => {
  return (
    <div className={styles.fallback}>
      <h4 className={styles.heading}>Umm, this is awkward...</h4>
      <p className={styles.description}>Reload, maybe?</p>
    </div>
  )
}

export default Fallback
