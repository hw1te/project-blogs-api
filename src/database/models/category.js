const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
  },
    {
      timestamps: 'false',
    });
  Category.associate = (models) => {
    Category.belongsToMany(models.Users, {
      foreignKey: 'userId', as: 'user'
    });
  };
  return Category;
}

module.exports = Category;