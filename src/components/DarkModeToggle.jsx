import React from 'react'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'
import styles from './DarkModeToggle.module.css'

const DarkModeToggle = ({ mode = 'DARK_MODE' }) => {
  const color = mode === 'LIGHT_MODE' ? '#F7D78352' : '#1C1C1E'
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: color }}
    >
      <img
        className={styles.image}
        src={ mode === 'LIGHT_MODE' ? Sun : Moon}
        alt='Dark mode toggle'
      />
    </button>
  )
}

export default DarkModeToggle