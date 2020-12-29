'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Post, { foreignKey: 'postId' });
    Review.belongsTo(models.User, { foreignKey: 'userId'})

  };
  return Review;
};
