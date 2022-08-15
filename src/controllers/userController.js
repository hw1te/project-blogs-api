const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const user = req.body;
    const payload = {
      displayName: user.displayName,
      email: user.email,
      image: user.image,
    };
    const { code, data } = await userService.create(user);
    if (code === 201) {
      const token = userService.makeToken(payload);
      return res.status(code).json({ token });
    }

    res.status(code).json(data);
  },

  validateToken: async (req, res, next) => {
    try {
      let token = req.headers.authorization;
      console.log(token);
      if (!token) {
        return res.status(401).json({ message: 'Token not found' });
      }
      token = token.replace('Bearer ', '');

      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;

      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  },

  getUsers: async (_req, res) => {
    const { code, data } = await userService.getUsers();
    console.log(code, data);
    res.status(code).json(data);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const { code, data } = await userService.getById(id);
    console.log(code);
    return res.status(code).json(data);
  },

};

module.exports = userController;