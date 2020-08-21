const connection = require('./connection')
const {generatePasswordHash} = require('../auth/hash')

module.exports = {
  createUser,
  getUser,
  userExists,
  getUserByUsername,
  getAllUsers
}

function createUser ({username,firstName,lastName, password}, db = connection) {
    return generatePasswordHash(password)
      .then(hash => db('users').insert({username,firstName,lastName, hash}))
  }

function getUser (id,testDb) {
    const db = testDb || connection

    return db('users')
    .where('id', id)
    .first()
}

function userExists (username, testDb) {
  const db = testDb || connection

  return db('users')
    .where('username', username)
    .then(users => users.length > 0)
}

function getUserByUsername (username, testDb) {
  const db = testDb || connection

  return db('users')
    .where('username', username)
    .first()
}

function getAllUsers(testDb) {
  const db = testDb || connection
  return db('users')
}
