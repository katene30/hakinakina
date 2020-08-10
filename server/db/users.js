const connection = require('./connection')
const {generateHash} = require('../auth/hash')

module.exports = {
  createUser,
  getUser
}

function createUser ({username,firstName,lastName, password}, db = connection) {
    return generateHash(password)
      .then(hash => db('users').insert({username,firstName,lastName, hash}))
  }

function getUser (id,testDb) {
    const db = testDb || connection

    return db('users')
    .where('id', id)
    .first()
}