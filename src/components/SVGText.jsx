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
      stroke={ darkMode ? '#fafafa' : '#1A1A1A' }
      fill='none'
      style={{
        transition: 'fill 0.2s ease-in, stroke 0.2s ease-in'
      }}
    >
      RAAGUL N.
    </text>
  )
}

export default SVGText