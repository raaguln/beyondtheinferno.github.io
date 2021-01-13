import { areaRadial, curveBasis } from 'd3-shape'
import { scaleLinear, scaleTime } from 'd3-scale'
import { timeParse } from 'd3-time-format'
import nullData from './nullData'
import data from './radialAreaData'

const parseTime = timeParse('%I:%M%p')

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

  const x = scaleTime()
    .domain([
      parseTime('12:00am'),
      parseTime('11:59pm')
    ])
    .range([0, 2 * Math.PI + 0.15])

  const y = scaleLinear()
    .domain([
      0,
      Math.max.apply(Math, data.map(d => d.value))
    ])
    .range([innerRadius, outerRadius])

  const area = areaRadial()
    .curve(curveBasis)
    .angle(d => x(d.time))
    .radius(d => y(d.value))
    .innerRadius(y(0))
    .outerRadius(d => y(d.value))

  const paths = [area(initialData), area(finalData)]

  return {
    paths,
    innerRadius
  }
}