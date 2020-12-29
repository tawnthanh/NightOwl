'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostType = sequelize.define('PostType', {
    type: DataTypes.STRING
  }, {});
  PostType.associate = function (models) {
    // associations can be defined here
    PostType.belongsTo(models.PostContent, { foreignKey: 'postId'})
  };
  return PostType;
};
