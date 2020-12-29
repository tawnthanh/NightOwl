'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostContent = sequelize.define('PostContent', {
    postId: DataTypes.INTEGER,
    fieldName: {
      type: DataTypes.ENUM,
      values: ['Photo', 'Video', 'Text', 'Audio']}
  }, {});
  PostContent.associate = function (models) {
    PostContent.belongsTo(models.Post, { foreignKey: 'postId' });

  };
  return PostContent;
};
