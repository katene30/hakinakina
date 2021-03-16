import { removeUser } from '../utils/auth'

function requestLogout () {
    console.log('first')
  return {
    type: 'LOGOUT_REQUEST',
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout () {
    console.log('second')
  return {
    type: 'LOGOUT_SUCCESS',
    isFetching: false,
    isAuthenticated: false
  }
}

// Logs the user out
export function logoutUser () {
  return dispatch => {
    // document.location = "/#/"
    dispatch(requestLogout())
    removeUser()
    dispatch(receiveLogout())
  }
}