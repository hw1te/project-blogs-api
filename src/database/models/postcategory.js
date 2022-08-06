const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
  },
    {
      timestapms: 'false',
    });
  PostCategory.associate = (models) => {
    PostCategory.belongsToMany(models.BlogPost, {
      as: 'post',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
    PostCategory.associate = (models) => {
      PostCategory.belongsToMany(models.Category, {
        as: 'category',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId'
      });
    };
    return PostCategory;
  }
}

module.exports = PostCategory;