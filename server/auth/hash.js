const bcrypt = require('bcrypt')
const sodium = require('libsodium-wrappers')

module.exports = {
  generateHash,
  comparePasswordToHash,
  generatePasswordHash
}

function generateHash (password) {
  // We have to wait for sodium to initialise. sodium.ready is a promise.
  return sodium.ready.then(() =>
    sodium.crypto_pwhash_str(
      password,
      sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_MEMLIMIT_MIN
    )
  )
}

function generatePasswordHash (password) {
    return bcrypt.hash(password,12)
}

function comparePasswordToHash(password, hash) {
  return bcrypt.compare(password, hash)
}