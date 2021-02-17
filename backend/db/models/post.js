'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    postTypeId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Post.associate = function (models) {
    Post.belongsToMany(models.User, { through: "likes", otherKey: "userId", foreignKey: "postId" });

    Post.belongsTo(models.PostType, { foreignKey: 'postTypeId' });
    Post.belongsTo(models.User, { foreignKey: 'userId' });

    Post.hasMany(models.PostContent, { foreignKey: 'postId' });
    Post.hasMany(models.Review, { foreignKey: 'postId' });
  };
  return Post;
};
