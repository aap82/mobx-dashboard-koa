require './style.scss'
React = require 'react'
{inject, observer} = require 'mobx-react'



class MainApp extends React.Component
  constructor: (props) ->
    super props

  componentWillMount: ->
    console.log 'MainApp will mount'

  render: ->
    console.log 'MainApp render'
    {isAuthenticated} = @props.appStore
    console.log isAuthenticated
    <div className="content">
      {this.props.children}
    </div>


`export default inject('appStore', 'routing')(observer(MainApp))`
