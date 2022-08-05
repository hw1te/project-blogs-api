'use strict';
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'user_id', as: 'posts'
    });
  };

  return User;
}

module.exports = User;