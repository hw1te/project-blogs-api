const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: DataTypes.STRING,
  });
  Category.associate = (models) => {
    Category.belongsToMany(models.Users, {
      foreignKey: 'userId', as: 'user'
    });
  };
  return Category;
}

module.exports = Category;