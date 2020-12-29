'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.Post, { foreignKey: 'postId' });
    Like.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Like;
};
