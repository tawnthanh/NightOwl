'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostContent = sequelize.define('PostContent', {
    postId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    src: DataTypes.TEXT,
  }, {});
  PostContent.associate = function (models) {
    PostContent.belongsTo(models.Post, { foreignKey: 'postId' });

  };
  return PostContent;
};
