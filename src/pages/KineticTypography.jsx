import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useSpring, animated as a, config } from 'react-spring'
import { useHistory } from 'react-router-dom'
import { interpolate } from 'flubber'
import { getRadialAreaData } from '../utils/getRadialAreaData'
import ReactLogo from '../assets/icons/react.png'
import D3Logo from '../assets/icons/d3.png'
import ReduxLogo from '../assets/icons/redux.png'
import JestLogo from '../assets/icons/jest.png'
import WebpackLogo from '../assets/icons/webpack.png'
import PythonLogo from '../assets/icons/python.png'
import styles from './KineticTypography.module.css'
import Languages from '../components/Languages'


const KineticTypography = () => {
  const width = window.innerWidth,
        height = window.innerHeight

  const history = useHistory()

  const [{
    data,
    initialData,
    x,
    y,
    line,
    area,
    innerRadius,
    outerRadius,
    parseTime
  }] = useState(() => getRadialAreaData(width, height))

  const paths = [
    area(initialData),
    area(data)
  ]

  const interpolator = interpolate(paths[0], paths[1])

  const [anim, setAnim] = useSpring(() => ({
    dummyVal: 0,
    transform: [0, 0, 1.8],
    text: 'Hey!',
    opacity: 1,
    bottomText: "You doubt me?",
    bottomTextTransform: [0, 0],
    bottomTextOpacity: 0,
    bottomTextColor: 'white',
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
    config: { mass: 1, tension: 200, friction: 21, clamp: true },
    onRest: () => {}
  }))

  const languagesPages = [
    {
      logo: ReactLogo,
      alt: 'React logo',
      text: 'React',
      left: anim.reactLeft,
      opacity: anim.reactOpacity,
      color: '#61DAFB'
    },
    {
      logo: D3Logo,
      alt: 'D3 logo',
      text: 'D3.js',
      left: anim.d3Left,
      opacity: anim.d3Opacity,
      color: 'orange'
    },
    {
      logo: ReduxLogo,
      alt: 'Redux logo',
      text: 'Redux',
      left: anim.reduxLeft,
      opacity: anim.reduxOpacity,
      color: '#8044C3'
    },
    {
      logo: WebpackLogo,
      alt: 'Webpack logo',
      text: 'Webpack',
      left: anim.webpackLeft,
      opacity: anim.webpackOpacity,
      color: '#8ED5FA'
    },
    {
      logo: JestLogo,
      alt: 'Jest logo',
      text: 'Jest',
      left: anim.jestLeft,
      opacity: anim.jestOpacity,
      color: '#C63D16'
    },
    {
      logo: PythonLogo,
      alt: 'Python logo',
      text: 'Python',
      left: anim.pythonLeft,
      opacity: anim.pythonOpacity,
      color: '#FFD13C'
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setAnim({
        to: [
          {
            transform: [-1, 0, 1],
            text: "I'm",
            config: config.default,
            onRest: () => {}
          },
          {
            transform: [-2, 0, 1],
            text: "I'm Raagul",
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-4, 0, 1],
            text: "I'm Raagul N",
            config: config.slow
          },
          {
            transform: [-8, 0, 1],
            text: "I'm Raagul Nagendran",
            config: config.default
          },
          {
            transform: [-6, 0, 1],
            text: "I'm Raagul N",
            config: config.slow
          },
          {
            transform: [0, 0, 1],
            text: "I",
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-1, 0, 1],
            text: "I am",
          },
          {
            transform: [-4, 0, 1],
            text: "I am a",
            config: config.stiff
          },
          {
            transform: [0, 0, 1],
            text: "Front End Developer",
            config: config.slow
          },
          {
            bottomTextOpacity: 1,
            config: config.molasses
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            bottomTextTransform: [0, -10],
            bottomTextOpacity: 0,
            config: config.stiff,
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
            config: config.slow,
            immediate: false
          },
          {
            bottomTextOpacity: 1,
            config: config.molasses
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            bottomTextTransform: [0, -10],
            bottomTextOpacity: 0,
            config: config.stiff,
          },
          // RADIAL CHART
          {
            r: Math.ceil(Math.sqrt(
              Math.pow((width / 2), 2) + Math.pow((height / 2), 2),
            )),
            config: config.slow
          },
          {
            chartOpacity: 1,
            config: config.gentle,
          },
          {
            radialAreaLabel: 1,
            config: config.molasses
          },
          {
            chartPath: 1,
            config: config.molasses
          },
          {
            radialAreaX: 1,
            config: config.molasses
          },


          {
            bottomText: "I blame my cozy WFH setup :)",
            bottomTextColor: 'black',
            immediate: true
          },
          {
            bottomTextOpacity: 1,
            config: config.molasses,
            immediate: false
          },
          {
            dummyVal: 20,
            config: config.molasses
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            bottomTextTransform: [0, -10],
            bottomTextOpacity: 0,
            config: config.stiff,
          },



          {
            r: 0,
            chartOpacity: 0,
            radialAreaLabel: 0,
            chartPath: 0,
            radialAreaX: 0,
            config: config.slow
          },
          // BACKEND DEVELOPER
          {
            transform: [0, 0, 1],
            text: "Backend Developer",
            immediate: true
          },
          {
            opacity: 1,
            config: config.slow,
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
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-2, 0, 1],
            text: "Backend Developer..",
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-3, 0, 1],
            text: "Backend Developer...",
            config: config.slow,
          },
          {
            bottomText: "In Progress",
            bottomTextColor: 'white',
            immediate: true
          },
          {
            bottomTextOpacity: 1,
            config: config.molasses,
            immediate: false
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            bottomTextTransform: [0, -10],
            bottomTextOpacity: 0,
            config: config.stiff,
          },
          {
            transform: [-1, 0, 1],
            bottomTextTransform: [0, 0],
            immediate: true
          },
          {
            transform: [0, 0, 1],
            opacity: 1,
            text: "I",
            config: { mass: 1, tension: 200, friction: 21, clamp: true },
            immediate: false
          },
          {
            transform: [-2, 0, 1],
            text: "I speak",
            config: config.slow
          },
          {
            baseLeft: -50,
            baseOpacity: 0,
            reactLeft: 0,
            reactOpacity: 1,
            config: config.default
          },
          {
            reactLeft: -50,
            reactOpacity: 0,
            d3Left: 0,
            d3Opacity: 1,
            config: config.default
          },
          {
            d3Left: -50,
            d3Opacity: 0,
            reduxLeft: 0,
            reduxOpacity: 1,
            config: config.default
          },
          {
            reduxLeft: -50,
            reduxOpacity: 0,
            webpackLeft: 0,
            webpackOpacity: 1,
            config: config.default
          },
          {
            webpackLeft: -50,
            webpackOpacity: 0,
            jestLeft: 0,
            jestOpacity: 1,
            config: config.default
          },
          {
            jestLeft: -50,
            jestOpacity: 0,
            pythonLeft: 0,
            pythonOpacity: 1,
            config: config.default
          },
          {
            baseLeft: 100,
            baseOpacity: 0,
            transform: [-2, 0, 1],
            text: "And lot more",
            immediate: true
          },
          {
            pythonLeft: -50,
            pythonOpacity: 0,
            baseLeft: 0,
            baseOpacity: 1,
            config: config.default,
            immediate: false
          },
          {
            transform: [-1, 0, 1],
            text: "And lot more.",
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-2, 0, 1],
            text: "And lot more..",
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            transform: [-3, 0, 1],
            text: "And lot more...",
            config: config.slow,
          },
          {
            bottomText: "Flutter, Django are loading...",
            immediate: true
          },
          {
            bottomTextOpacity: 1,
            config: config.molasses,
            immediate: false
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            bottomTextTransform: [0, -10],
            bottomTextOpacity: 0,
            config: config.stiff,
          },


          // I COULD HAVE TOLD YOU THIS
          {
            transform: [-5, 0, 1],
            text: "I",
            bottomText: "through a normal website with static text and images...",
            immediate: true
          },
          {
            opacity: 1,
            config: config.default,
            immediate: false
          },
          {
            text: "I could",
            transform: [-4, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "I could have",
            transform: [-2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "I could have told",
            transform: [0, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "I could have told you",
            transform: [2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "I could have told you all",
            transform: [4, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "I could have told you all this",
            transform: [6, 0, 1],
            config: config.slow
          },
          {
            bottomTextOpacity: 1,
            config: config.molasses
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            bottomTextTransform: [0, -10],
            bottomTextOpacity: 0,
            config: config.stiff,
          },

          // BUT WHAT'S TEH FUN IN THAT
          {
            transform: [-5, 0, 1],
            text: "But",
            bottomText: "Plus, I like challenges :)",
            immediate: true
          },
          {
            opacity: 1,
            config: config.default,
            immediate: false
          },
          {
            text: "But what's",
            transform: [-4, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "But what's the",
            transform: [-2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "But what's the fun",
            transform: [0, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "But what's the fun in",
            transform: [2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "But what's the fun in that?",
            transform: [4, 0, 1],
            config: config.slow
          },
          {
            bottomTextOpacity: 1,
            config: config.molasses
          },
          {
            transform: [0, -20, 1],
            opacity: 0,
            bottomTextTransform: [0, -10],
            bottomTextOpacity: 0,
            config: config.stiff,
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
            config: config.default,
            immediate: false
          },
          {
            text: "So,",
            transform: [-4, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you",
            transform: [-2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want",
            transform: [0, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want to",
            transform: [2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want to hire",
            transform: [4, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want to hire me",
            transform: [2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want to hire me?",
            transform: [0, 0, 1],
            config: config.slow
          },
          {
            bottomTextOpacity: 1,
            config: config.molasses
          },
          {
            bottomTextTransform: [0, -10],
            bottomTextOpacity: 0,
            config: config.stiff,
          },
          {
            text: "So, you want to hire me",
            transform: [2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want to hire",
            transform: [4, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want to",
            transform: [2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want to contact",
            transform: [4, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want to contact me",
            transform: [2, 0, 1],
            config: { mass: 1, tension: 200, friction: 21, clamp: true }
          },
          {
            text: "So, you want to contact me?",
            transform: [0, 0, 1],
            config: config.molasses
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
            config: config.molasses
          },
          {
            dummyVal: 0,
            onRest: () => {
              history.push("/")
            }
          }
        ],
      })
    }, 5000)
  }, [])

  return(
    <>
    <a.div className={styles.container}
      style={{
        position: 'absolute',
        left: anim.baseLeft.interpolate(x => `${x}vw`),
        opacity: anim.baseOpacity
      }}
    >
      <svg className={styles.svg} width='100%' height='100%' viewBox={`0, 0, ${width}, ${height}`} preserveAspectRatio='xMidYMid meet'>
        <defs>
          <radialGradient id='coolBlue'>
            <stop offset='50%' stopColor='#0061ff' />
            <stop offset='95%' stopColor='#60efff' />
          </radialGradient>
        </defs>
        <a.circle
          cx={width / 2}
          cy={height / 2}
          r={anim.r}
          fill='white'
        />
        <a.circle
          cx={width / 2}
          cy={height / 2}
          r={anim.r2}
          fill='white'
          stroke='#0061ff'
          strokeWidth='1'
        />
        <a.path
          transform={`translate(${width / 2}, ${height / 2}) rotate(10)`}
          fill='url(#coolBlue)'
          d={anim.chartPath.interpolate(interpolator)}
          style={{
            opacity: anim.chartOpacity
          }}
        />
        <path id='innerCircle' d={paths[0]} transform={`translate(${width / 2}, ${height / 2}) rotate(10)`} style={{ opacity: 0 }}/>
        <a.g style={{ opacity: anim.radialAreaX }}>
          <text
            transform='translate(-30, 30)'
            fill='black'
            fontSize='2.3vmin'
          >
            <textPath href='#innerCircle' startOffset='1%'>
              12 AM
            </textPath>
          </text>
          <text
            transform='translate(30, 30)'
            fill='black'
            fontSize='2.3vmin'
          >
            <textPath href='#innerCircle' startOffset='46.5%'>
              11:59 PM
            </textPath>
          </text>
        </a.g>
        <a.foreignObject
          x={width / 2 - ((innerRadius * 2 - 30) / 2)}
          y={height / 2 - ((innerRadius * 2 - 30) / 2)}
          width={ innerRadius * 2 - 30 }
          height={ innerRadius * 2 - 30 }
          style={{
            textAlign: "center",
            opacity: anim.radialAreaLabel
          }}
        >
        <div className={styles.radialAreaLabel} xmlns="http://www.w3.org/1999/xhtml">
          IN A DAY, CHANCES THAT YOU'LL FIND ME IN MY BED, THANKS TO
          <p className={styles.styledLabel}>2020</p>
        </div>
        </a.foreignObject>
      </svg>
      <a.p
        className={styles.text}
        style={{
          transform: anim.transform.interpolate((x, y, s) => `translate(${x}px, ${y}px) scale(${s})`),
          opacity: anim.opacity
        }}
      >
        { anim.text }
      </a.p>
      <a.p
        className={styles.bottomText}
        style={{
          opacity: anim.bottomTextOpacity,
          color: anim.bottomTextColor
        }}
      >
        { anim.bottomText }
      </a.p>
    </a.div>
    {
      languagesPages.map(language => (
        <Languages {...language} />
      ))
    }
    </>
  )
}

export default KineticTypography