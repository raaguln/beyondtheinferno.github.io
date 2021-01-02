import React, { useState } from 'react'
import { useTransition, animated as a } from 'react-spring'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'
import styles from './DarkModeToggle.module.css'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  const transitions = useTransition(darkMode, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <button
      className={styles.button}
      style={{ backgroundColor: darkMode ? '#262626' : '#F7D78352' }}
      onClick={() => setDarkMode((prev) => !prev)}
    >
    {
      transitions.map(({ item, props }, i) =>
      item
        ? <a.img
            key={i}
            className={styles.image}
            src={Moon}
            alt='Dark mode toggle'
            style={props}
          />
        : <a.img
            key={i}
            className={styles.image}
            src={Sun}
            alt='Dark mode toggle'
            style={props}
          />
      )
    }
    </button>
  )
}

export default DarkModeToggle