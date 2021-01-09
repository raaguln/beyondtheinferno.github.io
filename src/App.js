import React from 'react'
import LandingPage from './pages/LandingPage'
import KineticTypography from './pages/KineticTypography'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, animated as a } from 'react-spring'
import styles from './App.module.css'

const App = () => {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions.map(({ item: location, props, key }) => (
    <a.div key={key} className={styles.App} style={props}>
      <Switch location={location}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/summary" component={KineticTypography} />
      </Switch>
    </a.div>
  ))
}

export default App
