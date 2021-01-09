import React, { useState, useEffect } from 'react'
import { useTrail, config } from 'react-spring'
import useDarkMode from 'use-dark-mode'
import { getClusterData } from '../utils/getData'
import { SVG, Icon, Toggle, TLDR } from '../components'
import {
  Linkedin, LinkedinLight, Github, GithubLight,
  Resume, ResumeLight, Mail, MailLight
} from '../assets/icons'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  const {
    value: darkMode,
    toggle: darkModeToggle
  } = useDarkMode()

  const [data] = useState(() => getClusterData())

  const icons = [
    {
      link: 'https://drive.google.com/file/d/1RMoZEVQuJljZB_KlZZOJ3uvVum8NMav4/view',
      icon: darkMode ? ResumeLight : Resume,
      alt: 'Resume'
    },
    {
      link: 'https://www.linkedin.com/in/raagul-n/',
      icon: darkMode ? LinkedinLight : Linkedin,
      alt: 'LinkedIn'
    },
    {
      link: 'https://github.com/beyondtheinferno',
      icon: darkMode ? GithubLight : Github,
      alt: 'Github'
    },
    {
      link: 'mailto:raagul72@gmail.com',
      icon: darkMode ? MailLight : Mail,
      alt: 'Email'
    },
  ]

  const [startAnimation, setStartAnimation] = useState(false)

  const [springs, setSprings] = useTrail(icons.length, () => ({
    transform: -20,
    opacity: 0,
    config: config.molasses
  }))

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true)
    }, 500)
  }, [])

  useEffect(() => {
    if(startAnimation) {
      setTimeout(() => {
        setSprings({
          transform: 0,
          opacity: 1,
        })
      }, 3000)
    }
  }, [startAnimation])

  const svgProps = {
    ...data,
    darkMode,
    startAnimation
  }

  return(
    <div className={styles.container}>
      <div className={styles.topRightContainer}>
        <TLDR darkMode={darkMode} />
        <Toggle
          darkMode={darkMode}
          darkModeToggle={darkModeToggle}
        />
      </div>
      <SVG {...svgProps} />
      <div className={styles.links}>
      {
        icons.map((icon, i) => (
          <Icon
            key={i}
            {...icon}
            spring={springs[i]}
          />
        ))
      }
      </div>
    </div>
  )
}

export default LandingPage