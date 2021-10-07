import React, { useState, useEffect } from 'react'
import { useTrail, config } from 'react-spring'
import useDarkMode from 'use-dark-mode'
import { getClusterData } from '../utils/getData'
import { SVG, Icon, Toggle, NavButton } from '../components'
import {
  Linkedin,
  LinkedinLight,
  Github,
  GithubLight,
  Mail,
  MailLight,
  // Resume, ResumeLight,
} from '../assets/icons'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  const { value: darkMode, toggle: darkModeToggle } = useDarkMode()

  const [data] = useState(() => getClusterData())

  const icons = [
    // {
    //   link: '',
    //   icon: darkMode ? ResumeLight : Resume,
    //   alt: 'Resume'
    // },
    {
      link: 'https://www.linkedin.com/in/raagul-n/',
      icon: darkMode ? LinkedinLight : Linkedin,
      alt: 'Click to see my LinkedIn.',
    },
    {
      link: 'https://github.com/beyondtheinferno',
      icon: darkMode ? GithubLight : Github,
      alt: 'Click to see my Github.',
    },
    {
      link: 'mailto:beyondtheinfernotech@gmail.com',
      icon: darkMode ? MailLight : Mail,
      alt: ' Click to contact me through my email.',
    },
  ]

  const [startAnimation, setStartAnimation] = useState(false)

  const [springs, setSprings] = useTrail(icons.length, () => ({
    transform: -20,
    opacity: 0,
    config: config.molasses,
  }))

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true)
    }, 500)
  }, [])

  useEffect(() => {
    if (startAnimation) {
      setTimeout(() => {
        setSprings({
          transform: 0,
          opacity: 1,
        })
      }, 3000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAnimation])

  const svgProps = {
    ...data,
    darkMode,
    startAnimation,
  }

  return (
    <>
      <nav className={styles.topRightContainer}>
        <NavButton
          darkMode={darkMode}
          text="tl;dr"
          url="/summary"
          bgColor="#8338ec72"
          aria="Click to know more about me."
        />
        <NavButton
          darkMode={darkMode}
          text="Work"
          url="/work"
          bgColor="#ffbe0b72"
          aria="Click to know more about my work."
        />
        <Toggle darkMode={darkMode} darkModeToggle={darkModeToggle} />
      </nav>
      <main className={styles.container}>
        <SVG {...svgProps} />
        <div className={styles.links}>
          {icons.map((icon, i) => (
            <Icon key={i} {...icon} spring={springs[i]} />
          ))}
        </div>
      </main>
    </>
  )
}

export default LandingPage
