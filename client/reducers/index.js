import {combineReducers} from 'redux'
import auth from './auth'
import logs from './logs'
import term from './term'

const reducers = combineReducers({
    logs,
    auth,
    term
})

export default reducers