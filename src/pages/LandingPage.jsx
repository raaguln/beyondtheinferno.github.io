import React, { useState, useEffect } from 'react'
import { useTrail, animated as a, config } from 'react-spring'
import { getClusterData } from '../utils/getData'
import SVGText from '../components/SVGText'
import Icon from '../components/Icon'
import DarkModeToggle from '../components/DarkModeToggle'
import LinkedinIcon from '../assets/linkedin.svg'
import GithubIcon from '../assets/github.svg'
import ResumeIcon from '../assets/file.svg'
import MailIcon from '../assets/mail.svg'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  const width = 800,
        height = 120

  const icons = [
    {
      link: 'https://drive.google.com/file/d/1RMoZEVQuJljZB_KlZZOJ3uvVum8NMav4/view',
      icon: ResumeIcon,
      alt: 'Resume'
    },
    {
      link: 'https://www.linkedin.com/in/raagul-n/',
      icon: LinkedinIcon,
      alt: 'LinkedIn'
    },
    {
      link: 'https://github.com/beyondtheinferno',
      icon: GithubIcon,
      alt: 'Github'
    },
    {
      link: 'mailto:raagul72@gmail.com',
      icon: MailIcon,
      alt: 'Email'
    },
  ]

  const [{ circles, radius, color }] = useState(() => getClusterData())

  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

  const [startAnimation, setStartAnimation] = useState(false)

  const [springs, setSprings] = useTrail(
    icons.length,
    () => ({
      transform: -20,
      opacity: 0,
      config: config.molasses
    }),
  )

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

  return(
    <div className={styles.container}>
      <DarkModeToggle />
      <svg className={styles.svg} viewBox={`0, 0, ${width}, ${height}`} preserveAspectRatio='xMidYMid meet'>
        <defs>
          <clipPath id='name'>
            <SVGText
              x={width / 2}
              y={height / 2}
            />
          </clipPath>
        </defs>
        <SVGText
          x={width / 2}
          y={height / 2}
        />
        <g className={styles.circleContainer} clipPath="url(#name)">
        {
          circles.map(({x, y }, i) => (
            <circle
              key={i}
              className={styles.circle}
              cx={x}
              cy={y}
              transform={`translate(${width / 2}, ${height / 2})`}
              r={startAnimation ? radius(getRandomArbitrary(0, 5)) : 0}
              fill={color(getRandomArbitrary(0, 7))}
            />
          ))
        }
        </g>
      </svg>
      <div className={styles.links}>
      {
        icons.map((icon, i) => (
          <Icon
            key={i}
            id={i}
            {...icon}
            springs={springs}
          />
        ))
      }
      </div>
    </div>
  )
}

export default LandingPage