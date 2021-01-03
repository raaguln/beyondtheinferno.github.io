import React from 'react'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'
import styles from './DarkModeToggle.module.css'

const DarkModeToggle = ({ darkMode, darkModeToggle }) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: darkMode ? '#262626' : '#F7D78372' }}
      onClick={ darkModeToggle }
    >
      <img
        className={styles.image}
        src={ darkMode ? Moon : Sun }
        alt='Dark mode toggle'
      />
    </button>
  )
}

export default DarkModeToggle