const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { validate } = require('../schemas/userSchemas');

const userService = {
  getUsers: async () => {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      raw: true,
    });

    return { code: 200, data: users };
  },

  getById: async (id) => {
    const user = await User.findByPk(id, {

      attributes: { exclude: ['password'] },
    });
    if (!user) {
      return { code: 404, data: { message: 'User does not exist' } };
    }
    return { code: 200, data: user };
  },
  makeToken: (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return token;
  },

  create: async (user) => {
    const emails = await User.findAll({
      attr1: ['email'],
      raw: true,
    });
    const allEmails = emails.map((email) => email.email);
    const validation = validate(user);
    if (validation !== false) {
      return validation;
    }
    if (allEmails.includes(user.email)) {
      return { code: 409, data: { message: 'User already registered' } };
    }

    const result = await User.create(user);
    return { code: 201, data: result };
  },

  delete: async (id) => {
    console.log(id);
    const getUserbById = await User.findByPk(id);
    const userId = getUserbById.dataValues.id;
    const deleteUser = await User.destroy({
      where: { id: userId },
    });

    return { code: 204, data: deleteUser };
  },
};

module.exports = userService;