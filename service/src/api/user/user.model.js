const Promise = require('bluebird')
const mongoose = require('mongoose')

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,    
    unique: true    
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: '2'
  },
  check: {
    type: Boolean,
    default: false
  },
},
{ timestamps: true }
)

/**
 * Methods
 */
UserSchema.method({
})

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get User
   * @param {Object} conditions - conditions to find user for
   * @returns {Promise<User, Error>}
   */
  async get (conditions) {
    const user = await this.findOne(conditions).exec()
    if (user) {
      return user
    }
    // const err = new APIError('No such user exists!', httpStatus.NOT_FOUND)
    return Promise.reject(err)
  },

  /**
   * List users in decending order of 'createdAt' timestamp
   * @param {number} skip - Number of users to be skipped
   * @param {number} limit - Limit number of users to be returned
   * @returns {Promise<User[], Error>}
   */
  async list ({ skip = 0, limit = 50 } = {}) {
    const users = await this.find()
      .select('-password')
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec()
    return users
  }
}

/**
 * @typedef User
 */
module.exports = mongoose.model('User', UserSchema)