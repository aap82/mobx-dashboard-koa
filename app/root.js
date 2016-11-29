import React from 'react'
import { IndexRoute, IndexRedirect, Router, Route } from 'react-router';
import { Provider } from 'mobx-react'
import MainApp from './MainApp';
import Dashboard from './Dashboard';
import InitPage from './InitPage';



export default class Root extends React.Component {
  render() {
    const { stores, history } = this.props
    return (
      <Provider {...stores}>
        <Router history={history} >
          <Route component={MainApp} >
            <Route path="*" component={InitPage} />
            <Route path="dashboard" component={Dashboard} />
          </Route>
        </Router>
      </Provider>

    )
  }
}
