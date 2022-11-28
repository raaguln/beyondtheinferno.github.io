import { config } from 'react-spring'

const width = window.innerWidth,
  height = window.innerHeight

const superFast = { mass: 1, tension: 200, friction: 21, clamp: true },
  fast = config.default,
  medium = config.default,
  // mediumSlow = config.gentle,
  slow = config.slow,
  superSlow = config.molasses

export const initialTypographyStates = {
  playOpacity: 1,
  dummyVal: 0,
  transform: [0, 0, 1.8],
  text: 'Hey!',
  opacity: 0,
  bottomText: 'Can do both ends :)',
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
  onRest: () => {},
}

export const typographyState = [
  {
    playOpacity: 0,
    config: superFast,
  },
  {
    opacity: 1,
    config: fast,
  },
  {
    transform: [-1, 0, 1],
    text: "I'm",
    config: fast,
    onRest: () => {},
  },
  {
    transform: [-2, 0, 1],
    text: "I'm Raagul",
    config: superFast,
  },
  {
    transform: [-8, 0, 1],
    text: "I'm Raagul Nagendran",
    config: slow,
  },
  // FRONT END DEVELOPER
  {
    transform: [0, 0, 1],
    text: 'I',
    config: superFast,
  },
  {
    transform: [-1, 0, 1],
    text: 'I am',
    config: superFast,
  },
  {
    transform: [-4, 0, 1],
    text: 'I am a',
    config: fast,
  },
  {
    transform: [0, 0, 1],
    text: 'Full Stack Developer',
    config: fast,
  },
  {
    bottomTextOpacity: 1,
    config: slow,
  },
  { dummyVal: 20, config: medium },
  {
    transform: [0, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: superFast,
  },
  // DATA VISUALISATION
  {
    transform: [0, 0, 1],
    text: 'Data Visualisation Engineer',
    bottomText: 'You doubt me?',
    immediate: true,
  },
  {
    opacity: 1,
    config: fast,
    immediate: false,
  },
  {
    bottomTextOpacity: 1,
    config: superSlow,
  },
  { dummyVal: 40, config: medium },
  {
    transform: [0, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: fast,
  },
  // RADIAL CHART
  {
    r: Math.ceil(Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2))),
    config: fast,
  },
  {
    chartOpacity: 1,
    config: medium,
  },
  {
    radialAreaLabel: 1,
    config: medium,
  },
  {
    radialAreaX: 1,
    config: medium,
  },
  {
    chartPath: 1,
    config: slow,
  },
  {
    bottomText: 'WFH + music is :)',
    bottomTextColor: '#121212',
    immediate: true,
  },
  {
    bottomTextOpacity: 1,
    config: superSlow,
    immediate: false,
  },
  {
    dummyVal: 60,
    config: slow,
  },
  {
    transform: [0, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    r: 0,
    chartOpacity: 0,
    radialAreaLabel: 0,
    chartPath: 0,
    radialAreaX: 0,
    config: fast,
  },
  // LANGUAGES
  {
    transform: [0, 0, 1],
    opacity: 1,
    text: 'I',
    config: superFast,
    immediate: false,
  },
  {
    transform: [-2, 0, 1],
    text: 'I speak',
    config: medium,
  },
  {
    baseLeft: -50,
    baseOpacity: 0,
    reactLeft: 0,
    reactOpacity: 1,
    config: fast,
  },
  {
    reactLeft: -50,
    reactOpacity: 0,
    d3Left: 0,
    d3Opacity: 1,
    config: fast,
  },
  {
    d3Left: -50,
    d3Opacity: 0,
    reduxLeft: 0,
    reduxOpacity: 1,
    config: fast,
  },
  {
    reduxLeft: -50,
    reduxOpacity: 0,
    webpackLeft: 0,
    webpackOpacity: 1,
    config: fast,
  },
  {
    webpackLeft: -50,
    webpackOpacity: 0,
    jestLeft: 0,
    jestOpacity: 1,
    config: fast,
  },
  {
    jestLeft: -50,
    jestOpacity: 0,
    pythonLeft: 0,
    pythonOpacity: 1,
    config: fast,
  },
  {
    baseLeft: 100,
    baseOpacity: 0,
    transform: [-2, 0, 1],
    text: 'And lots more',
    bottomTextColor: '#fafafa',
    immediate: true,
  },
  {
    pythonLeft: -50,
    pythonOpacity: 0,
    baseLeft: 0,
    baseOpacity: 1,
    config: fast,
    immediate: false,
  },
  {
    transform: [-1, 0, 1],
    text: 'And lots more.',
    bottomText: 'Like ML, AI, Game Dev',
    config: superFast,
  },
  {
    transform: [-2, 0, 1],
    text: 'And lots more..',
    config: superFast,
  },
  {
    transform: [-3, 0, 1],
    text: 'And lots more...',
    config: superFast,
  },
  {
    bottomTextOpacity: 1,
    config: slow,
  },
  { dummyVal: 40, config: medium },
  {
    transform: [0, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: superFast,
  },
  // I COULD HAVE TOLD YOU THIS
  {
    transform: [-6, 0, 1],
    text: 'I',
    bottomText: 'through static texts and images...',
    immediate: true,
  },
  {
    opacity: 1,
    config: superFast,
    immediate: false,
  },
  {
    text: 'I could',
    transform: [-4, 0, 1],
    config: superFast,
  },
  {
    text: 'I could have',
    transform: [-2, 0, 1],
    config: superFast,
  },
  {
    text: 'I could have told',
    transform: [0, 0, 1],
    config: superFast,
  },
  {
    text: 'I could have told you',
    transform: [2, 0, 1],
    config: superFast,
  },
  {
    text: 'I could have told you all',
    transform: [4, 0, 1],
    config: superFast,
  },
  {
    text: 'I could have told you all this',
    transform: [6, 0, 1],
    config: fast,
  },
  {
    bottomTextOpacity: 1,
    config: slow,
  },
  { dummyVal: 60, config: medium },
  {
    transform: [6, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: superFast,
  },

  // BUT WHAT'S TEH FUN IN THAT
  {
    transform: [-6, 0, 1],
    text: 'But',
    bottomText: 'Plus, I like challenges :)',
    immediate: true,
  },
  {
    opacity: 1,
    config: superFast,
    immediate: false,
  },
  {
    text: "But what's",
    transform: [-4, 0, 1],
    config: superFast,
  },
  {
    text: "But what's the",
    transform: [-2, 0, 1],
    config: superFast,
  },
  {
    text: "But what's the fun",
    transform: [0, 0, 1],
    config: superFast,
  },
  {
    text: "But what's the fun in",
    transform: [2, 0, 1],
    config: superFast,
  },
  {
    text: "But what's the fun in that?",
    transform: [4, 0, 1],
    config: slow,
  },
  {
    bottomTextOpacity: 1,
    config: slow,
  },
  { dummyVal: 80, config: medium },
  {
    transform: [4, -20, 1],
    opacity: 0,
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: superFast,
  },
  // FINALE
  {
    transform: [-5, 0, 1],
    text: 'So',
    bottomText: "Sorry, I'm taken right now :)",
    immediate: true,
  },
  {
    opacity: 1,
    config: superFast,
    immediate: false,
  },
  {
    text: 'So,',
    transform: [-4, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you',
    transform: [-2, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want',
    transform: [0, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want to',
    transform: [2, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want to hire',
    transform: [4, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want to hire me',
    transform: [2, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want to hire me?',
    transform: [0, 0, 1],
    config: slow,
  },
  {
    bottomTextOpacity: 1,
    config: slow,
  },
  { dummyVal: 100, config: medium },
  {
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    config: superFast,
  },
  {
    text: 'So, you want to hire me',
    transform: [2, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want to hire',
    transform: [4, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want to',
    transform: [2, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want to contact',
    transform: [4, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want to contact me',
    transform: [2, 0, 1],
    config: superFast,
  },
  {
    text: 'So, you want to contact me?',
    transform: [0, 0, 1],
    config: superFast,
  },
  {
    bottomTextTransform: [0, -10],
    bottomTextOpacity: 0,
    bottomText: 'Details in homepage, redirecting...',
    immediate: true,
  },
  {
    bottomTextOpacity: 1,
    immediate: false,
    config: slow,
  },
  { dummyVal: 120, config: medium },
]
