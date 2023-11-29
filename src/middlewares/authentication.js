const jwt = require('jsonwebtoken')
const createError = require('http-errors')

function getToken(req, next) {
  const TOKEN_REGEX = /^\s*Bearer\s+(\S+)/g
  const matches = TOKEN_REGEX.exec(req.headers.authorization)

  if (!matches) {
    return next(new createError.Unauthorized())
  }

  const [, token] = matches
  return token
}

function authentication(req, res, next) {
  if (!req.headers.authorization) {
    console.error('Missing authorization header')
    return next(new createError.Unauthorized())
  }

  const token = getToken(req, next)

  try {
    req.user = jwt.verify(token, 'base-api-express-generator', {
      issuer: 'base-api-express-generator',
    })


    if (!req.user || !req.user._id || !req.user.role) {
      console.error('Error authenticating malformed JWT')
      return next(new createError.Unauthorized())
    }

    console.info(`User ${req.user._id} authenticated`)

    next(null)
  } catch (err) {
    if (err.message === 'invalid algorithm' || err.message === 'invalid signature') {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
      console.error(`Suspicious access attempt from ip=${ip} ${token}`)
    }
    if (err.name === 'TokenExpiredError') {
      console.error('Expired token, sending 401 to client')
      return res.sendStatus(401)
    }
    return next(new createError.Unauthorized(err))
  }
}

module.exports = authentication
