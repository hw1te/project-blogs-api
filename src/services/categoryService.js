const { Category } = require('../database/models');

const categoryService = {
  create: async (name) => {
    const category = await Category.create(
      { name },
      { raw: true },
    );
    if (!name) {
      return { code: 400, data: { message: '"name" is required' } };
    }
    return { code: 201, data: category };
  },
};

module.exports = categoryService;