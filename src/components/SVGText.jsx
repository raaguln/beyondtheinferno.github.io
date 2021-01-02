import React from 'react'

const SVGText = ({ x, y, darkMode = false }) => {
  return (
    <text
      x={x}
      y={y}
      textAnchor='middle'
      dominantBaseline='middle'
      fontSize='120px'
      fontWeight= '900'
      stroke={ darkMode ? 'white' : 'black' }
      fill={ darkMode ? '#1A1A1A' : 'white' }
    >
      RAAGUL N.
    </text>
  )
}

export default SVGText