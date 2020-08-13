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
    console.log('hit')
    return request.post({
        url:rootUrl+'/register',
        body:newUser
    })
    .then(res => {
        console.log(res.body)
        return res.body
    })
}