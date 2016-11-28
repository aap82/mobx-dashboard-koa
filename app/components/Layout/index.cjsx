require './style.scss'
React = require 'react'

class Layout extends React.Component
  render: ->
    <div className="content">
      {@props.children}
    </div>


module.exports = Layout

