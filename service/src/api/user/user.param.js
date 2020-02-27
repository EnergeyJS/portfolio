const Joi = require('joi')

module.exports = {
  /**
   * @apiName Create User
   * @apiGroup User
   */
  create: {
    body: {
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
      role: Joi.string().optional(),
      check: Joi.boolean().optional(),
    }
  },

  /**
   * @apiName Get User
   * @apiGroup User
   */
  get: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      userId: Joi.string().required()
    }
  },

  /**
   * @apiName Update User
   * @apiGroup User
   */
  update: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      userId: Joi.string().required()
    },
    body: {
        username: Joi.string().optional(),
        email: Joi.string().optional(),
        password: Joi.string().optional(),
        name: Joi.string().optional(),
        role: Joi.string().optional(),
        check: Joi.boolean().optional(),
    }
  },

  /**
   * @apiName List Users
   * @apiGroup User
   */
  list: {
    query: {
      skip: Joi.string(),
      limit: Joi.string()
    }
  },

  /**
   * @apiName Delete User
   * @apiGroup User
   */
  remove: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      userId: Joi.string().required()
    }
  }
}