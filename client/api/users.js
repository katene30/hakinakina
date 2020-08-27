import request from 'superagent'
import { clearGroup } from '../../server/db/connection'
const {saveUserToken} = require('../utils/auth')



const rootUrl = '/api/v1/auth'

export function createUser(username,firstName,lastName,password){
    const newUser = {
        username,
        firstName,
        lastName,
        password
    }
    return request.post(rootUrl+'/register')
    .send(newUser)
    .then(res => {
        saveUserToken(res.body.token)
        return res.body
    })
    .catch(err => {
        if(err) throw err
    })
}

export function login(user){
    user = {
        username: user.username,
        password: user.password
    }
    return request.post(rootUrl + '/login')
    .send(user)
    .then(res => {
        saveUserToken(res.body.token)
        return res.body
    })
}


