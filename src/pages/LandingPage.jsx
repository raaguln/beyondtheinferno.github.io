import React, { useState, useEffect } from 'react'
import { getClusterData } from '../utils/getData'
import SVGText from '../components/SVGText'
import Icon from '../components/Icon'
import LinkedinIcon from '../assets/linkedin.svg'
import GithubIcon from '../assets/github.svg'
import ResumeIcon from '../assets/file.svg'
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
    }
  ]

  let [{ circles, radius, color }] = useState(() => getClusterData())

  let getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

  let [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true)
    }, 500)
  }, [])

  return(
    <div className={styles.container}>
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
            {...icon}
          />
        ))
      }
      </div>
    </div>
  )
}

export default LandingPage