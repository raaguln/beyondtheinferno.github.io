import React from 'react'
import { Sun, Moon } from '../assets/icons'
import styles from './Toggle.module.css'

const Toggle = ({ darkMode, darkModeToggle }) => {
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

export default Toggle