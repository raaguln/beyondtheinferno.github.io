import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './NavButton.module.css'

const NavButton = ({ darkMode, text, url, bgColor, aria }) => {
  const history = useHistory()

  return (
    <button
      className={styles.button}
      onClick={() => history.push(url)}
      style={{
        color: darkMode ? '#fafafa' : '#121212',
        backgroundColor: bgColor,
      }}
      aria-label={aria}>
      {text}
    </button>
  )
}

export default NavButton
