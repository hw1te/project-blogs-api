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

  getById: async () => {
    const result = await Category.findAll({
      attributes: ['id'],
      raw: true,
    });

    return result.map((id) => id.id);
  },

  getCategories: async () => {
    const categories = await Category.findAll({
      raw: true,
    });

    return { code: 200, data: categories };
  },
};

module.exports = categoryService;