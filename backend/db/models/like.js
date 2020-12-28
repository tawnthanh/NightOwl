'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    Like.hasMany(models.Post, { foreignKey: 'postId' });
    Like.hasMany(models.User, { foreignKey: 'userId' });
  };
  return Like;
};
