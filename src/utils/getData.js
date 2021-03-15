import { scaleOrdinal } from "d3-scale"
import { data } from "../utils/data"

export const getClusterData = () => {
  let color = scaleOrdinal([
    "#e6c229",
    "#f17105",
    "#d11149",
    "#9051F6",
    "#1a8fe3",
    "#40916c",
  ])

  // const temp = new Array(25000).fill().map(() => ({ r: 5 }))
  // let bgCircles = packSiblings(temp)
  // bgCircles = bgCircles.map((d) => ({
  //   ...d,
  //   r: getRandomArbitrary(2, 10),
  //   fill: color(getRandomArbitrary(0, 5)),
  // }))

  // bgCircles = bgCircles.filter(
  //   ({ x, y }) => x >= 0 && x <= 650 && y >= 0 && y <= 90
  // )
  // console.log(bgCircles)

  return {
    circles: data,
    color,
  }
}
