const { Router } = require('express')
const validate = require('express-validation')
const guard = require('express-jwt')

const userParam = require('./user.param')
const userCtrl = require('./user.controller')

const router = Router()

router.route('/')
  .post(validate(userParam.create), userCtrl.create)

  router.route('/:userId')
  .get(
      guard({ secret: 'secret', requestProperty: 'auth' }),
      validate(userParam.get),
      userCtrl.get
    )

// router.param('userId', userCtrl.load)

module.exports = router