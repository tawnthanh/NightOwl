'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [
      { postId: 2, userId: 3 },
      { postId: 2, userId: 1 },
      { postId: 3, userId: 3 },
      { postId: 4, userId: 1 },
      { postId: 4, userId: 4 },
      { postId: 1, userId: 4 },
      { postId: 5, userId: 1 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
