const express = require('express')
const verifyJwt = require('express-jwt')

const {createUser,getUser} = require('../db/users')
const token = require("../auth/token")

const router = express.Router()

const rootUrl = '/api/v1/auth'

router.post('/register', register,token.issue)
router.use(userError)

router.get(
    '/user',
    verifyJwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}),
    user
  )
  
  function user (req, res) {
    getUser(req.user.id)
      .then((user) =>
        res.json({
          ok: true,
          firstName:user.firstName,
          lastName:user.lastName,
          username:user.username
        }))
      .catch(() =>
        res.status(500).json({
          ok: false,
          message: 'An error ocurred while retrieving your user profile.'
        }))
  }

function register (req, res,next) {
    createUser(req.body)
    .then(([id]) => {
        // Be sure to grab the id out of the array Knex returns it in!
        // You can use array destructuring (as above) if you like.
        res.locals.userId = id
        next()
    })
      .catch(({message}) => {
        // This is vulnerable to changing databases. SQLite happens to use
        // this message, but Postgres doesn't.  
        if (message.includes('UNIQUE constraint failed: users.username')) {
          return res.status(400).json({
            ok: false,
            message: 'Username already exists.'
          })
        }
        res.status(500).json({
          ok: false,
          message: "Something bad happened. We don't know why."
        })
      })
  }


  function userError (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({ok: false, message: 'Access denied.'})
    }
  }

module.exports = router