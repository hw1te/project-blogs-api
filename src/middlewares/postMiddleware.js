const categoryService = require('../services/categoryService');

const postMiddleware = {
  validateBody: (req, res, next) => {
    const { categoryIds, title, content } = req.body;

    if (!categoryIds || !title || !content) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
  },

  validateCategoryId: async (req, res, next) => {
    const { categoryIds } = req.body;
    const getIds = await categoryService.getById();

    const categoryIdIsValid = categoryIds.filter((categoryId) => getIds.includes(categoryId));

    if (categoryIdIsValid.length !== categoryIds.length) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    next();
  },
};

module.exports = postMiddleware;
