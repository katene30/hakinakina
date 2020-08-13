import request from 'superagent'
import { clearGroup } from '../../server/db/connection'

const rootUrl = '/api/v1/auth'

export function createUser(username,firstName,lastName,hash){
    const newUser = {
        username,
        firstName,
        lastName,
        hash
    }
    return request.post(rootUrl+'/register')
    .send(newUser)
    .then(res => {
        return res.body
    })
}