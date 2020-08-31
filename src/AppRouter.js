import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import LandingPage from './LandingPage'

const AppRouter = (props) => {
  return(
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/kanban' component={App}/>  
          <Route exact path='/' component={LandingPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter