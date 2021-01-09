import { scaleOrdinal, scaleLinear } from 'd3'
import { data } from './data'

export const getClusterData = () => {
  /* Since SVG is scaling proportionately, no need to recompute `packSiblings` initially */
  // 5000 nodes for larger screens
  // let data = new Array(3000).fill().map(() => ({r: 6}))
  // let circles = packSiblings(data)

  let radius = scaleLinear()
    .domain([0, 5])
    .range([2, 12])

  let color = scaleOrdinal(
    [0, 1, 2, 3, 4, 5, 6],
    // ["#CA4DAF", "#35A993", "#8820A3", "#CD4F61", "#F7D783", "#FF8C50", "#4D4AED", "#86BEFF"]
    ["#e6c229", "#f17105", "#d11149", "#9051F6", "#1a8fe3", "#40916c"]
    // ["#ffbe0b", "#fb5607", "#ff006e","#8338ec", "#3a86ff"]
    // ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]
  )

  return {
    circles: data,
    radius,
    color
  }
}