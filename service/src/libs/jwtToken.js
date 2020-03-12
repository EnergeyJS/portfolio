const jwt = require('jsonwebtoken')

/**
 * Create JSON Web Token
 * @param {Object} payload payload for jwt
 * @param {String} expiresIn expire time i.e. '1d', '1h' or '20m'
 */
const create = (payload, expiresIn) => jwt.sign(payload,'secret', { expiresIn })

/**
 * Get payload data from JWT
 * @param {String} token JWT token
 */
const getData = (token) => jwt.decode(token)

module.exports = {
  create,
  getData
}