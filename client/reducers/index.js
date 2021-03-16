import {combineReducers} from 'redux'
import auth from './auth'
import logs from './logs'

const reducers = combineReducers({
    logs,
    auth
})

export default reducers