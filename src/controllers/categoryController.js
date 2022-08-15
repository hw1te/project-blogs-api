const categoryService = require('../services/categoryService');

const categoryController = {
  create: async (req, res) => {
    const { name } = req.body;

    const { code, data } = await categoryService.create(name);
    return res.status(code).json(data);
  },
};

module.exports = categoryController;