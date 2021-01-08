import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useSpring, animated as a, config } from 'react-spring'
import { interpolate } from 'flubber'
import { getRadialAreaData } from '../utils/getRadialAreaData'
import { Text } from '@vx/text'
import styles from './KineticTypography.module.css'

const AnimatedText = a(Text)

const KineticTypography = () => {
  const width = window.innerWidth,
        height = window.innerHeight

  // const textRef = useCallback(node => {
  //   console.log(node.childNodes[0].getBBox())
  // })
  // const [spacing, setSpacing] = useState(20)

  const [{
    data,
    initialData,
    x,
    y,
    line,
    area,
    innerRadius,
    outerRadius,
    parseTime
  }] = useState(() => getRadialAreaData(width, height))

  const innerCirclePath = line(initialData)
  const innerCircle = <path d={innerCirclePath}></path>
  console.log(innerCircle.current)

  const paths = [
    area(initialData),
    area(data)
  ]

  const interpolator = interpolate(paths[0], paths[1])

  const [anim, setAnim] = useSpring(() => ({
    transform: [0, 0, 1.8],
    text: 'Hey!',
    opacity: 1,
    bottomText: 'In Progress',
    bottomTextTransform: [0, 0],
    bottomTextOpacity: 0,
    r: 0,
    chartOpacity: 0,
    radialAreaLabel: 0,
    chartPath: 0,
    radialAreaX: 0,
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
            r: Math.ceil(Math.sqrt(
              Math.pow((width / 2), 2) + Math.pow((height / 2), 2),
            )),
            config: config.slow
          },
          {
            chartOpacity: 1,
            config: config.gentle,
          },
          {
            radialAreaLabel: 1,
            config: config.molasses
          },
          {
            chartPath: 1,
            config: config.molasses
          },
          {
            radialAreaX: 1,
            config: config.molasses
          },
          {
            r: 0,
            chartOpacity: 0,
            radialAreaLabel: 0,
            chartPath: 0,
            radialAreaX: 0,
            config: config.slow
          },
          // BACKEND DEVELOPER
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
          {
            transform: [0, 0, 1],
            opacity: 1,
            text: "I",
            config: config.stiff,
            immediate: false
          },
          {
            transform: [-2, 0, 1],
            text: "I speak",
            config: config.default
          },
        ],
      })
    }, 1000)
  }, [])

  console.log(parseTime('12:00pm'))

  return(
    <div className={styles.container}>
      <svg className={styles.svg} width='100%' height='100%' viewBox={`0, 0, ${width}, ${height}`} preserveAspectRatio='xMidYMid meet'>
        <defs>
          <radialGradient id='coolBlue'>
            <stop offset='50%' stopColor='#0061ff' />
            <stop offset='95%' stopColor='#60efff' />
          </radialGradient>
        </defs>
        <a.circle
          cx={width / 2}
          cy={height / 2}
          r={anim.r}
          fill='white'
        />
        <a.circle
          cx={width / 2}
          cy={height / 2}
          r={anim.r2}
          fill='white'
          stroke='#0061ff'
          strokeWidth='1'
        />
        <a.path
          transform={`translate(${width / 2}, ${height / 2}) rotate(10)`}
          fill='url(#coolBlue)'
          d={anim.chartPath.interpolate(interpolator)}
          style={{
            opacity: anim.chartOpacity
          }}
        />
        <path id='innerCircle' d={paths[0]} transform={`translate(${width / 2}, ${height / 2}) rotate(10)`} style={{ opacity: 0 }}/>
        <a.g style={{ opacity: anim.radialAreaX }}>
          <text
            transform='translate(-30, 30)'
            fill='black'
            fontSize='2.3vmin'
          >
            <textPath href='#innerCircle' startOffset='1%'>
              12 AM
            </textPath>
          </text>
          <text
            transform='translate(30, 30)'
            fill='black'
            fontSize='2.3vmin'
          >
            <textPath href='#innerCircle' startOffset='46.5%'>
              11:59 PM
            </textPath>
          </text>
        </a.g>
        <a.foreignObject
          x={width / 2 - ((innerRadius * 2 - 30) / 2)}
          y={height / 2 - ((innerRadius * 2 - 30) / 2)}
          width={ innerRadius * 2 - 30 }
          height={ innerRadius * 2 - 30 }
          style={{
            textAlign: "center",
            opacity: anim.radialAreaLabel
          }}
        >
        <div className={styles.radialAreaLabel} xmlns="http://www.w3.org/1999/xhtml">
          IN A DAY, CHANCES THAT YOU'LL FIND ME IN MY BED, THANKS TO
          <p className={styles.styledLabel}>2020</p>
        </div>
        </a.foreignObject>
      </svg>
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