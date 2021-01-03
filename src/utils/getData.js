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
    ["#CA4DAF", "#35A993", "#8820A3", "#CD4F61", "#F7D783", "#FF8C50", "#4D4AED", "#86BEFF"]
  )

  return {
    circles: data,
    radius,
    color
  }
}