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
};

module.exports = postService;
