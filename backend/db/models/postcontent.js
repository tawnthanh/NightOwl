'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostContent = sequelize.define('PostContent', {
    postId: DataTypes.INTEGER,
    fieldName: DataTypes.ENUM
  }, {});
  PostContent.associate = function (models) {
    PostContent.hasMany(models.Post, { foreignKey: 'postId' });

  };
  return PostContent;
};
