import { config } from 'react-spring'

const width = window.innerWidth,
      height = window.innerHeight

const superFast = { mass: 1, tension: 200, friction: 21, clamp: true },
  fast = config.default,
  medium = config.stiff,
  mediumSlow = config.gentle,
  slow = config.slow,
  superSlow = config.molasses

export const initialTypographyStates = {
  playOpacity: 1,
  dummyVal: 0,
  transform: [0, 0, 1.8],
  text: 'Hey!',
  opacity: 0,
  bottomText: "Doubts? This whole website is proof :P",
  bottomTextTransform: [0, 0],
  bottomTextOpacity: 0,
  bottomTextColor: '#fafafa',
  r: 0,
  chartOpacity: 0,
  radialAreaLabel: 0,
  chartPath: 0,
  radialAreaX: 0,
  baseLeft: 0,
  baseOpacity: 1,
  reactLeft: 100,
  reactOpacity: 0,
  d3Left: 100,
  d3Opacity: 0,
  reduxLeft: 100,
  reduxOpacity: 0,
  webpackLeft: 100,
  webpackOpacity: 0,
  jestLeft: 100,
  jestOpacity: 0,
  pythonLeft: 100,
  pythonOpacity: 0,
  config: superFast,
  onRest: () => {}
}

export const typographyState = [
  {
    playOpacity: 0,
    config: fast
  },
  {
    opacity: 1
  },
  {
    transform: [-1, 0, 1],
    text: "I'm",
    config: fast,
    onRest: () => {}
  },
  {
    transform: [-2, 0, 1],
    text: "I'm Raagul",
    config: superFast
  },
  {
    transform: [-4, 0, 1],
    text: "I'm Raagul N",
    config: slow
  },
  {
    transform: [-8, 0, 1],
    text: "I'm Raagul Nagendran",
    config: medium
  },
  {
    transform: [-6, 0, 1],
    text: "I'm Raagul N",
    config: slow
  },
  // FRONT END DEVELOPER
  {
    transform: [0, 0, 1],
    text: "I",
    config: superFast
  },
  {
    transform: [-1, 0, 1],
    text: "I am",
    config: superFast
  },
  {
    transform: [-4, 0, 1],
    text: "I am a",
    config: medium
  },
  {
    transform: [0, 0, 1],
    text: "Front End Developer",
    config: slow
  },
  {
    bottomTextOpacity: 1,
    config: superSlow
  },
  {
    transform: [0, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: medium
  },
  // DATA VISUALISATION
  {
    transform: [0, 0, 1],
    text: "Data Visualisation Engineer",
    bottomText: "You still doubt me?",
    immediate: true
  },
  {
    opacity: 1,
    config: slow,
    immediate: false
  },
  {
    bottomTextOpacity: 1,
    config: superSlow
  },
  {
    transform: [0, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: medium,
  },
  // RADIAL CHART
  {
    r: Math.ceil(Math.sqrt(
      Math.pow((width / 2), 2) + Math.pow((height / 2), 2),
    )),
    config: slow
  },
  {
    chartOpacity: 1,
    config: mediumSlow,
  },
  {
    radialAreaLabel: 1,
    config: superSlow
  },
  {
    chartPath: 1,
    config: superSlow
  },
  {
    radialAreaX: 1,
    config: superSlow
  },
  {
    bottomText: "WFH + music is :)",
    bottomTextColor: '#121212',
    immediate: true
  },
  {
    bottomTextOpacity: 1,
    config: superSlow,
    immediate: false
  },
  {
    dummyVal: 20,
    config: superSlow
  },
  {
    transform: [0, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: medium,
  },
  {
    r: 0,
    chartOpacity: 0,
    radialAreaLabel: 0,
    chartPath: 0,
    radialAreaX: 0,
    config: slow
  },
  // BACKEND DEVELOPER
  {
    transform: [0, 0, 1],
    text: "Backend Developer",
    config: slow,
    immediate: true
  },
  {
    opacity: 1,
    config: slow,
    immediate: false
  },
  {
    transform: [-4, 0, 1],
    text: "Backend Developer?",
  },
  {
    transform: [0, 0, 1],
    text: "Backend Developer",
  },
  {
    transform: [-1, 0, 1],
    text: "Backend Developer.",
    config: superFast
  },
  {
    transform: [-2, 0, 1],
    text: "Backend Developer..",
    config: superFast
  },
  {
    transform: [-3, 0, 1],
    text: "Backend Developer...",
    config: slow,
  },
  {
    bottomText: "In progress",
    bottomTextColor: '#fafafa',
    immediate: true
  },
  {
    bottomTextOpacity: 1,
    config: superSlow,
    immediate: false
  },
  {
    transform: [0, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: medium,
  },
  {
    transform: [-1, 0, 1],
    bottomTextTransform: [0, 0],
    immediate: true
  },
  // LANGUAGES
  {
    transform: [0, 0, 1],
    opacity: 1,
    text: "I",
    config: superFast,
    immediate: false
  },
  {
    transform: [-2, 0, 1],
    text: "I speak",
    config: slow
  },
  {
    baseLeft: -50,
    baseOpacity: 0,
    reactLeft: 0,
    reactOpacity: 1,
    config: fast
  },
  {
    reactLeft: -50,
    reactOpacity: 0,
    d3Left: 0,
    d3Opacity: 1,
    config: fast
  },
  {
    d3Left: -50,
    d3Opacity: 0,
    reduxLeft: 0,
    reduxOpacity: 1,
    config: fast
  },
  {
    reduxLeft: -50,
    reduxOpacity: 0,
    webpackLeft: 0,
    webpackOpacity: 1,
    config: fast
  },
  {
    webpackLeft: -50,
    webpackOpacity: 0,
    jestLeft: 0,
    jestOpacity: 1,
    config: fast
  },
  {
    jestLeft: -50,
    jestOpacity: 0,
    pythonLeft: 0,
    pythonOpacity: 1,
    config: fast
  },
  {
    baseLeft: 100,
    baseOpacity: 0,
    transform: [-2, 0, 1],
    text: "And lots more",
    immediate: true
  },
  {
    pythonLeft: -50,
    pythonOpacity: 0,
    baseLeft: 0,
    baseOpacity: 1,
    config: fast,
    immediate: false
  },
  {
    transform: [-1, 0, 1],
    text: "And lots more.",
    config: superFast
  },
  {
    transform: [-2, 0, 1],
    text: "And lots more..",
    config: superFast
  },
  {
    transform: [-3, 0, 1],
    text: "And lots more...",
    config: slow,
  },
  {
    bottomText: "Flutter, Django are loading...",
    immediate: true
  },
  {
    bottomTextOpacity: 1,
    config: superSlow,
    immediate: false
  },
  {
    transform: [0, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: medium,
  },
  // I COULD HAVE TOLD YOU THIS
  {
    transform: [-6, 0, 1],
    text: "I",
    bottomText: "through static texts and images...",
    immediate: true
  },
  {
    opacity: 1,
    config: superFast,
    immediate: false
  },
  {
    text: "I could",
    transform: [-4, 0, 1],
    config: superFast
  },
  {
    text: "I could have",
    transform: [-2, 0, 1],
    config: superFast
  },
  {
    text: "I could have told",
    transform: [0, 0, 1],
    config: superFast
  },
  {
    text: "I could have told you",
    transform: [2, 0, 1],
    config: superFast
  },
  {
    text: "I could have told you all",
    transform: [4, 0, 1],
    config: superFast
  },
  {
    text: "I could have told you all this",
    transform: [6, 0, 1],
    config: slow
  },
  {
    bottomTextOpacity: 1,
    config: superSlow
  },
  {
    transform: [6, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: medium,
  },

  // BUT WHAT'S TEH FUN IN THAT
  {
    transform: [-6, 0, 1],
    text: "But",
    bottomText: "Plus, I like challenges :)",
    immediate: true
  },
  {
    opacity: 1,
    config: superFast,
    immediate: false
  },
  {
    text: "But what's",
    transform: [-4, 0, 1],
    config: superFast
  },
  {
    text: "But what's the",
    transform: [-2, 0, 1],
    config: superFast
  },
  {
    text: "But what's the fun",
    transform: [0, 0, 1],
    config: superFast
  },
  {
    text: "But what's the fun in",
    transform: [2, 0, 1],
    config: superFast
  },
  {
    text: "But what's the fun in that?",
    transform: [4, 0, 1],
    config: slow
  },
  {
    bottomTextOpacity: 1,
    config: superSlow
  },
  {
    transform: [4, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: medium,
  },
  // FINALE
  {
    transform: [-5, 0, 1],
    text: "So",
    bottomText: "Sorry, I'm taken right now :)",
    immediate: true
  },
  {
    opacity: 1,
    config: superFast,
    immediate: false
  },
  {
    text: "So,",
    transform: [-4, 0, 1],
    config: superFast
  },
  {
    text: "So, you",
    transform: [-2, 0, 1],
    config: superFast
  },
  {
    text: "So, you want",
    transform: [0, 0, 1],
    config: superFast
  },
  {
    text: "So, you want to",
    transform: [2, 0, 1],
    config: superFast
  },
  {
    text: "So, you want to hire",
    transform: [4, 0, 1],
    config: superFast
  },
  {
    text: "So, you want to hire me",
    transform: [2, 0, 1],
    config: superFast
  },
  {
    text: "So, you want to hire me?",
    transform: [0, 0, 1],
    config: slow
  },
  {
    bottomTextOpacity: 1,
    config: superSlow
  },
  {
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: medium,
  },
  {
    text: "So, you want to hire me",
    transform: [2, 0, 1],
    config: superFast
  },
  {
    text: "So, you want to hire",
    transform: [4, 0, 1],
    config: superFast
  },
  {
    text: "So, you want to",
    transform: [2, 0, 1],
    config: superFast
  },
  {
    text: "So, you want to contact",
    transform: [4, 0, 1],
    config: superFast
  },
  {
    text: "So, you want to contact me",
    transform: [2, 0, 1],
    config: superFast
  },
  {
    text: "So, you want to contact me?",
    transform: [0, 0, 1],
    config: slow
  },
  {
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    bottomText: "Deets in homepage, redirecting...",
    immediate: true
  },
  {
    bottomTextOpacity: 1,
    immediate: false,
    config: slow
  },
  {
    config: fast
  }
]