require './style.scss'
React = require 'react'
{inject, observer} = require 'mobx-react'
Redirect = require('react-router/Redirect').default
actions = require './actions'
LoginModal = require('../components/LoginModal').default




class EntryPage extends React.Component
  componentDidMount: -> actions.onMount(@props)
  render: ->
    {redirectToReferrer, loginRequired, isLoading} = @props.entryPage
    <div className="entry-page">
      <div className="entry-container">
       {
        if redirectToReferrer
          if @props.location.state?
            <Redirect to={@props.location.state.from} />
          else
            <Redirect to={{pathname: '/dashboard', state: { user: 'busty'}}} />
        else if loginRequired
          <LoginModal />
        else if isLoading
          <div>LOADING</div>
       }
      </div>
    </div>


`export default inject('app','entryPage')(observer(EntryPage))`

