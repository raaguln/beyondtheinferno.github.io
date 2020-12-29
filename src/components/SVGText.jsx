import React from 'react'

const SVGText = ({ x, y }) => {
  return (
    <text
      x={x}
      y={y}
      textAnchor='middle'
      dominantBaseline='middle'
      fontSize='120px'
      fontWeight= '900'
      stroke='black'
      fill='white'
    >
      RAAGUL N.
    </text>
  )
}

export default SVGText