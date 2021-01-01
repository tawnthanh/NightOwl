'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      { userId: 3, postTypeId: 1, title:"What Lurks In Shadows"},
      { userId: 2, postTypeId: 3, title:"Who knew Jennifer's body was based on a true crime?"},
      { userId: 4, postTypeId: 2, title:"The Lululemon Killer"},
      { userId: 1, postTypeId: 4},
      { userId: 3, postTypeId: 2, title:"Serial Napper"},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
