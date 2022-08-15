const jwt = require('jsonwebtoken');
const categoryService = require('../services/categoryService');

const categoryController = {
  validateToken: async (req, res, next) => {
    try {
      let token = req.headers.authorization;
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

  create: async (req, res) => {
    const { name } = req.body;

    const { code, data } = await categoryService.create(name);
    return res.status(code).json(data);
  },
};

module.exports = categoryController;