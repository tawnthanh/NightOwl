'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    postTypeId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.hasMany(models.PostType, { foreignKey: 'postTypeId' });
    Post.hasMany(models.User, { foreignKey: 'userId' });

    Post.belongsTo(models.PostContent, { foreignKey: 'postId' });
    Post.belongsTo(models.Review, { foreignKey: 'postId' });
    Post.belongsTo(models.Like, { foreignKey: 'postId' });
  };
  return Post;
};
