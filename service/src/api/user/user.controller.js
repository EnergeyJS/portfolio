const _ = require('lodash')
const bcrypt = require('bcryptjs')
const User = require('./user.model')

const salt = bcrypt.genSaltSync(10)

// Creation of user
async function create (req, res, next) {
    try {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
        name: req.body.name,
        role: req.body.role,
        check: req.body.check,
      })
      const savedUser = await user.save()
      const sendUser = _.pick(savedUser, ['_id', 'username', 'email', 'name', 'role', 'check'])
      return res.json(sendUser)
    } catch (e) {
      return next(e)
    }
  }

  async function get (req, res, next) {
    try {
        const { userId } = req.params;
      const user = await User.get({_id: userId})
      const sendUser = _.pick(user, ['_id', 'username', 'email', 'name', 'role', 'check'])
      return res.json(sendUser)
    } catch (e) {
      return next(e)
    }
  }

  module.exports = {
    // load,
    create,
    get,
  }