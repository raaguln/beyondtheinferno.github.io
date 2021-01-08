import * as d3 from 'd3'
import data from './radialAreaData'
import nullData from './nullData'

const parseTime = d3.timeParse('%I:%M%p')

export const getRadialAreaData = (width, height) => {
  const margin = 50,
        innerRadius = width > height ? (height / 4) : (width / 4),
        outerRadius = width > height ? (height / 2 - margin) : (width / 2 - margin)

  const finalData = data.map(d => ({
    time: parseTime(d.time),
    value: d.value
  }))

  const initialData = nullData.map(d => ({
    time: parseTime(d.time),
    value: d.value
  }))

  const x = d3.scaleTime()
    .domain([
      parseTime('12:00am'),
      parseTime('11:59pm')
    ])
    .range([0, 2 * Math.PI])

  const y = d3.scaleLinear()
    .domain([
      0,
      d3.max(data, d => d.value)
    ])
    .range([innerRadius, outerRadius])

  const line = d3.lineRadial()
    .curve(d3.curveLinearClosed)
    .angle(d => x(d.time))
    .radius(d => y(d.value))

  const area = d3.areaRadial()
    .curve(d3.curveBasis)
    .angle(d => x(d.time))
    .radius(d => y(d.value))
    .innerRadius(y(0))
    .outerRadius(d => y(d.value))

  return {
    data: finalData,
    initialData,
    x,
    y,
    line,
    area,
    innerRadius,
    outerRadius,
    parseTime
  }
}