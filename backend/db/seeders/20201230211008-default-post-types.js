'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PostTypes', [
      { type: "text"},
      { type: "audio"},
      { type: "photo"},
      { type: "video"}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PostTypes', null, {});
  }
};
