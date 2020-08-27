const decode = require('jwt-decode')

const {get, set} = require( './localstorage')

function isAuthenticated () {
  const token = get('token')
  if (token) {
    const payload = decode(token)
    const expiry = payload.exp

    if (expiry < new Date().getTime() / 1000) {
      removeUser()
      return false
    }
    return true
  } else {
    return false
  }
}

function saveUserToken (token) {
  set('token', token)
  return decode(token)
}

function getUserTokenInfo () {
  const token = get('token')
  return token ? decode(token) : null
}

function removeUser () {
  set('token', null)
}

module.exports ={
  isAuthenticated,
  saveUserToken,
  getUserTokenInfo,
  removeUser
}