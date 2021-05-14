import React, { lazy, Suspense } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, animated as a } from 'react-spring'
import { Fallback } from './pages'
import styles from './App.module.css'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const KineticTypography = lazy(() => import('./pages/KineticTypography'))

const App = () => {
  const location = useLocation()
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions.map(({ item: location, props, key }) => (
    <Suspense fallback={<Fallback />}>
      <a.div key={key} className={styles.App} style={props}>
        <Switch location={location}>
          <Route exact path="/" component={LandingPage} />
          <Route path="/summary" component={KineticTypography} />
        </Switch>
      </a.div>
    </Suspense>
  ))
}

export default App
