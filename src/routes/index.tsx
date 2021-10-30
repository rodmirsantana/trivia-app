import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Results from '../pages/Results'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/quiz" component={Quiz} />
    <Route path="/results" component={Results} />
  </Switch>
)

export default Routes
