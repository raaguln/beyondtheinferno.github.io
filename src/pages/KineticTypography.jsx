import React, { useEffect } from 'react'
import { useSpring, animated as a, config } from 'react-spring'
import styles from './KineticTypography.module.css'

const KineticTypography = () => {

  const [anim, setAnim] = useSpring(() => ({
    transform: [0, 0, 1.8],
    text: 'Hey!',
    opacity: 1,
    bottomText: 'In Progress',
    bottomTextTransform: [0, 0],
    bottomTextOpacity: 0,
    config: { mass: 1, tension: 200, friction: 21, clamp: true },
  }))

  useEffect(() => {
    setTimeout(() => {
      setAnim({
        to: [
          {
            transform: [-1, 0, 1],
            text: "I'm",
            config: config.default
          },
          {
            transform: [-2, 0, 1],
            text: "I'm Raagul",
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-4, 0, 1],
            text: "I'm Raagul N",
            config: config.stiff
          },
          {
            transform: [-8, 0, 1],
            text: "I'm Raagul Nagendran",
            config: config.default
          },
          {
            transform: [-6, 0, 1],
            text: "I'm Raagul N",
            config: config.slow
          },
          {
            transform: [0, 0, 1],
            text: "I",
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-1, 0, 1],
            text: "I am",
          },
          {
            transform: [-4, 0, 1],
            text: "I am a",
            config: config.stiff
          },
          {
            transform: [0, 0, 1],
            text: "Front End Developer",
            config: config.slow
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            config: config.stiff,
          },
          {
            transform: [0, 0, 1],
            text: "Data Visualization Engineer",
            config: config.slow,
            immediate: true
          },
          {
            opacity: 1,
            config: config.slow,
            immediate: false
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            config: config.stiff,
          },
          {
            transform: [0, 0, 1],
            text: "Backend Developer",
            immediate: true
          },
          {
            opacity: 1,
            config: config.slow,
            immediate: false
          },
          {
            transform: [-4, 0, 1],
            text: "Backend Developer?",
          },
          {
            transform: [0, 0, 1],
            text: "Backend Developer",
          },
          {
            transform: [-1, 0, 1],
            text: "Backend Developer.",
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-2, 0, 1],
            text: "Backend Developer..",
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-3, 0, 1],
            text: "Backend Developer...",
            config: config.slow,
          },
          {
            bottomTextOpacity: 1,
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            bottomTextTransform: [0, -10],
            bottomTextOpacity: 0,
            config: config.stiff,
          },
          {
            transform: [-1, 0, 1],
            bottomTextTransform: [0, 0],
            immediate: true
          },
          // {
          //   transform: [0, 0, 1],
          //   opacity: 1,
          //   text: "I",
          //   config: config.stiff,
          //   immediate: false
          // },
          // {
          //   transform: [-2, 0, 1],
          //   text: "I speak",
          //   config: config.default
          // },
        ],
      })
    }, 1000)
  }, [])

  return(
    <div className={styles.container}>
      <a.p
        className={styles.text}
        style={{
          transform: anim.transform.interpolate((x, y, s) => `translate(${x}px, ${y}px) scale(${s})`),
          opacity: anim.opacity
        }}
      >
        { anim.text }
      </a.p>
      <a.p
        className={styles.bottomText}
        style={{
          opacity: anim.bottomTextOpacity
        }}
      >
        { anim.bottomText }
      </a.p>
    </div>
  )
}

export default KineticTypography