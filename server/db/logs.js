const connection = require('./connection')

module.exports = {
  dbGetLogs,
  createLog,
  getLogsByUser,
  deleteLog
}


function dbGetLogs(db = connection){
  return db('logs')
  .select()
}

function createLog(log, db = connection){
  return db('logs')
  .insert(log)
  .then(getLogsByUser(log.userId))
}

function getLogsByUser(userId, db = connection){
  return db('logs')
  .where('userId', userId)
}

function deleteLog(log,db = connection){
  return db('logs')
  .where('id',log.id)
  .del()
  .then(getLogsByUser(log.userId))
}

