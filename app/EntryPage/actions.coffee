exports.onMount = ({app , entryPage, location}) ->
  entryPage.setReferrerState(location.state = {})
  _token = entryPage.loadToken()
  if _token?
    return 'hi'
  else
    setTimeout((-> entryPage.loginRequired = yes), 1000)
#    setTimeout((-> entryPage.redirectToReferrer = yes), 4000)