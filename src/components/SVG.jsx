import React from "react"
import { Name } from "."
import styles from "./SVG.module.css"

const SVG = ({ circles, color, darkMode, startAnimation }) => {
  const width = 800,
    height = 120

  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

  return (
    <svg
      className={styles.svg}
      viewBox={`0, 0, ${width}, ${height}`}
      preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id="myName">
          <Name darkMode={false} />
        </clipPath>
      </defs>
      <Name darkMode={darkMode} />
      <g
        className={styles.circleContainer}
        style={{
          isolation: "isolate",
        }}>
        {circles.map(({ x, y, r }, i) => (
          <circle
            key={i}
            className={styles.circle}
            cx={x}
            cy={y}
            transform="translate(84, 9)"
            r={startAnimation ? r : 0}
            fill={color(getRandomArbitrary(0, 7))}
            style={{
              mixBlendMode: darkMode ? "multiply" : "screen",
            }}
          />
        ))}
      </g>
    </svg>
  )
}

export default SVG
