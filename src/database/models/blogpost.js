const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsToMany(models.Users, {
      foreignKey: 'userId', as: 'user'
    });
  };
  return BlogPost;
}

module.exports = BlogPost;