import React, { useState, useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring'
import { useHistory } from 'react-router-dom'
import { interpolate } from 'flubber'
import { Languages } from '../components'
import { getRadialAreaData } from '../utils/getRadialAreaData'
import { initialTypographyStates, typographyState } from '../utils/typographyState'
import styles from './KineticTypography.module.css'
import {
  Play,
  ReactLogo,
  D3Logo,
  ReduxLogo,
  JestLogo,
  WebpackLogo,
  PythonLogo
} from '../assets/icons'


const KineticTypography = () => {
  const width = window.innerWidth,
        height = window.innerHeight

  const history = useHistory()

  const [{
    paths,
    innerRadius
  }] = useState(() => getRadialAreaData(width, height))

  const interpolator = interpolate(paths[0], paths[1])

  const [startAnimation, setStartAnimation] = useState(false)
  const [anim, setAnim] = useSpring(() => ({
    ...initialTypographyStates
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
    if(startAnimation)
      setAnim({
        to: [
          ...typographyState,
          {
            dummyVal: 15,
            onRest: () => {
              history.push("/")
            }
          }
        ],
      })
  }, [startAnimation])

  return(
    <div className={styles.parentContainer}>
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
          fill='#fafafa'
        />
        <a.circle
          cx={width / 2}
          cy={height / 2}
          r={anim.r2}
          fill='#fafafa'
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
            fill='#121212'
            fontSize='2.3vmin'
            fontWeight='800'
          >
            <textPath href='#innerCircle' startOffset='1%'>
              12 AM
            </textPath>
          </text>
          <text
            transform='translate(30, 30)'
            fill='#121212'
            fontSize='2.3vmin'
            fontWeight='800'
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
          PROBABILITY OF YOU FINDING ME IN MY BED IN
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
      <a.img
        className={styles.start}
        src={Play}
        alt='Start tldr;'
        onClick={() => setStartAnimation(true)}
        style={{
          opacity: anim.playOpacity
        }}
      />
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
    </div>
  )
}

export default KineticTypography