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
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ message: 'Token not found' });
      }

      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;

      return next();
    } catch (error) {
      res.status(401).json({ message: 'Expired or invalid token' });
    }
  },

  getUsers: async (_req, res) => {
    const { code, data } = await userService.getUsers();
    res.status(code).json(data);
  },
};

module.exports = userController;