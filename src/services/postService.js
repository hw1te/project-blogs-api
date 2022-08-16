const { BlogPost, User, PostCategory, Category } = require('../database/models');

const postService = {
  create: async (body, user) => {
    const getUser = await User.findOne({ where: { email: user.email } });
    const { id } = getUser.dataValues;

    const createPost = await BlogPost.create({ ...body, userId: id });

    body.categoryIds.map(async (categoryId) => {
      await PostCategory.create({ postId: createPost.id, categoryId });
    });

    return { code: 201, data: createPost };
  },

  // https://stackoverflow.com/questions/21883484/how-to-use-an-include-with-attributes-with-sequelize

  getAll: async () => {
    const post = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' }],
    });

    return { code: 200, data: post };
  },

  getBydId: async (id) => {
    const postId = await BlogPost.findByPk(id, {
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' }],
    });
    if (!postId) {
      return { code: 404, data: { message: 'Post does not exist' } };
    }

    return { code: 200, data: postId };
  },

  update: async ({ title, content }, id, userId) => {
    if (Number(id) !== userId) {
      return { code: 401, data: { message: 'Unauthorized user' } };
    }
    if (!title || !content) {
      return { code: 400, data: { message: 'Some required fields are missing' } };
    }
    await BlogPost.update({
      title, content, updated: new Date(),
    }, {
      where: { id },
      raw: true,
    });
    const getPostById = await BlogPost.findByPk(id, { include: 'categories' });
    return { code: 200, data: getPostById };
  },

  delete: async (id, userId) => {
    const getPostById = await BlogPost.findByPk(id, { include: 'categories' });
    if (!getPostById) {
      return { code: 404, data: { message: 'Post does not exist' } };
    }
    const postId = getPostById.dataValues.userId;
    if (userId !== postId) {
      return { code: 401, data: { message: 'Unauthorized user' } };
    }
    const deletePost = await BlogPost.destroy({
      where: { id },
    });
    return { code: 204, data: deletePost };
  },
};

module.exports = postService;
