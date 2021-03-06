const express = require('express')

const {createLog,getLogsByUser,deleteLog,dbGetLogs} = require ('../db/logs')

const router = express.Router()

router.post('/log',newLog)
router.get('/',getLogs)

function getLogs(req,res){
  dbGetLogs()
  .then(logs => {
    return res.json(logs)
  })
}

function newLog(req,res,next){
  createLog(req.body)
  .then(logs => {
    return res.json(logs)
  })
}

router.get('/logs/:userId', (req,res) => {
  getLogsByUser(req.params.userId)
  .then(logs => {
    return res.json(logs)
  })
})

router.post('/pop', (req,res) => {
  let log = req.body
  deleteLog(log)
  .then(logs => {
    return res.json(logs)
  })
})



module.exports = router