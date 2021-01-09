import * as d3 from 'd3'
import nullData from './nullData'
import data from './radialAreaData'

const parseTime = d3.timeParse('%I:%M%p')

export const getRadialAreaData = (width, height) => {
  const margin = 50,
        innerRadius = width > height ? (height / 4) : (width / 4),
        outerRadius = width > height ? (height / 2 - margin) : (width / 2 - margin)

  const initialData = nullData.map(d => ({
    time: parseTime(d.time),
    value: d.value
  }))

  const finalData = data.map(d => ({
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

  const area = d3.areaRadial()
    .curve(d3.curveBasis)
    .angle(d => x(d.time))
    .radius(d => y(d.value))
    .innerRadius(y(0))
    .outerRadius(d => y(d.value))

  const paths = [area(initialData), area(finalData)]

  return {
    innerRadius,
    paths
  }
}