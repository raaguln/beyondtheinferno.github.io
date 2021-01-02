import React from 'react'
import useDarkMode from 'use-dark-mode'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'
import styles from './DarkModeToggle.module.css'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <button
      className={styles.button}
      style={{ backgroundColor: darkMode.value ? '#262626' : '#F7D78352' }}
      onClick={darkMode.toggle}
    >
      <img
        className={styles.image}
        src={darkMode.value ? Moon : Sun}
        alt='Dark mode toggle'
      />
    </button>
  )
}

export default DarkModeToggle