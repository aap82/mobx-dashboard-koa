{extendObservable, transaction} = require 'mobx'

class TestStore
  constructor: ->
    extendObservable @, {
      loadingToking: no
      checkingToken: no
      savingToken: no
      activeMessage: ''
      modalOpen: no
    }


module.exports = TestStore