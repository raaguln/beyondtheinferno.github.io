import { scaleOrdinal, scaleLinear } from 'd3'
import { data } from './data'

export const getClusterData = () => {
  let radius = scaleLinear()
    .domain([0, 5])
    .range([2, 12])

  let color = scaleOrdinal(["#e6c229", "#f17105", "#d11149", "#9051F6", "#1a8fe3", "#40916c"])

  return {
    circles: data,
    radius,
    color
  }
}