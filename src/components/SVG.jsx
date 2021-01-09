import React from 'react'
import { Text } from '.'
import styles from './SVG.module.css'

const SVG = ({ circles, radius, color, darkMode, startAnimation }) => {
  const width = 800,
        height = 120

  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

  return (
    <svg className={styles.svg} viewBox={`0, 0, ${width}, ${height}`} preserveAspectRatio='xMidYMid meet'>
      <defs>
        <clipPath id='myName'>
          <Text
            x={width / 2}
            y={height / 2}
          />
        </clipPath>
      </defs>
      <Text
        x={width / 2}
        y={height / 2}
        darkMode={darkMode}
      />
      <g className={styles.circleContainer}
        style={{
          isolation: 'isolate'
        }}
      >
      {
        circles.map(({ x, y, r }, i) => (
          <circle
            key={i}
            className={styles.circle}
            cx={x}
            cy={y}
            transform={`translate(${width / 2}, ${height / 2})`}
            r={startAnimation ? r : 0}
            fill={color(getRandomArbitrary(0, 7))}
            style={{
              mixBlendMode: darkMode ? 'multiply' : 'screen'
            }}
          />
        ))
      }
      </g>
    </svg>
  )
}

export default SVG