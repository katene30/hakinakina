import {deleteLog as apiDeleteLog, getLogs as apiGetLogs, newLog as apiNewLog, getLogsByUser as apiGetLogsByUser} from '../api/logs'

export function getLogs() {
    return dispatch => {
        return apiGetLogs()
        .then(logs => {
         dispatch(saveLogs(logs))
      })
    }
  }
  
export function getLogsByUser(userId){
  return dispatch => {
      return apiGetLogsByUser(userId)
      .then(logs => {
        dispatch(saveLogs(logs))
      })
  }
}

  export function saveLogs(logs){
    return {
        type: 'SAVE_LOGS',
        logs,
    }
  }

  export function newLog(log){
    return dispatch => {
      return apiNewLog(log)
      .then(logs => {
        dispatch(saveLogs(logs))
      })
    }
  }

  export function deleteLog(log){
      return dispatch => {
          return apiDeleteLog(log)
          .then(()=> {
              dispatch(getLogs())
          })
      }
  }