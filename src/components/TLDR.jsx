import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './TLDR.module.css'

const TLDR = ({ darkMode }) => {
  const history = useHistory()

  return (
    <button
      className={styles.button}
      onClick={() => history.push("/summary")}
      style={{
        color: darkMode ? '#fafafa' : '#121212'
      }}
    >
      tl;dr
    </button>
  )
}

export default TLDR
