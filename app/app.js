import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Provider } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import {inject, observer} from 'mobx-react'

import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import Miss from 'react-router/Miss'

import Router from 'react-router/BrowserRouter'
import Dashboard from './Dashboard/Dashboard'
import EntryPage from './EntryPage/EntryPage'

const MatchWhenAuthorized = ({ auth, component: Component, ...rest }) => (
  <Match {...rest} render={props => (
    auth ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
const Protected = inject(
  stores => ({ auth: stores.app.isAuthenticated })
)(MatchWhenAuthorized)

const Redirected = (props) => (
  <Redirect to={{pathname: '/', state: {from: props.location}}} />
)

const App = ({stores}) => (
  <Provider {...stores}>
    <Router>
      <div className='main-container'>
        <DevTools position={{ bottom: 0, left: '20px' }} />
        <Protected pattern="/dashboard" component={Dashboard} />
        <Match exactly pattern="/" component={EntryPage} />
        <Miss component={Redirected} />
      </div>
    </Router>
  </Provider>
)

export default App;