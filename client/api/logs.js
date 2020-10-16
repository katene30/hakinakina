import request from 'superagent'

const rootUrl = '/api/v1/log'


export function newLog(log){
    return request.post(rootUrl+'/log')
    .send(log)
    .then(res =>{
        return res.body
    })
    .catch(err => {
        if(err) throw err
    })
}

export function deleteLog(log){
    return request.post(rootUrl + '/pop')
    .send(log)
    .then(res => {
        return res.body
    })
    .catch(err => {
        if(err) throw err
    })
}


export function getLogsByUser(userId){
    return request.get(`/api/v1/log/logs/${userId}`)
    .then(res => res.body)
}