{extendObservable, action, transaction} = require 'mobx'
Promise = require 'bluebird'

class EntryPageStore
  constructor: ->
    extendObservable @, {
      referrer: null
      redirectToReferrer: no
      isLoading: true
      loginRequired: false
      getReferrerState: action(->
        return @referrer
      )
      setReferrerState: action(({from = null}) ->
        @referrer = from
      )

    }

  loadToken: ->
    _token = localStorage.getItem('dashboard-token')
    return if _token? then _token else null

  saveToken: (token) ->
    if token? then localStorage.setItem('dashboard-token', token)







module.exports = EntryPageStore