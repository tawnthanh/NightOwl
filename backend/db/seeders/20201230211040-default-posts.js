'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      { userId: 3, postTypeId: 1, title:"What Lurks In Shadows"},
      { userId: 2, postTypeId: 3},
      { userId: 4, postTypeId: 2, title:"The Lululemon Killer"},
      { userId: 1, postTypeId: 4},
      { userId: 5, postTypeId: 1, title:"The Woman in the Walls"},
      { userId: 2, postTypeId: 1, title:"Misophonia"},
      { userId: 5, postTypeId: 3, title:"What Lurks In Shadows"},
      { userId: 1, postTypeId: 3, title:"What Lurks In Shadows"},
      { userId: 1, postTypeId: 4, title:"Unsolved - The Mysterious Disappearance Of The Sodder Children"},
      { userId: 4, postTypeId: 4, title:"The Bizarre Case of Joel Guy - Spicy Ramen & Ribs Mukbang"},
      { userId: 5, postTypeId: 1, title:"Meat Market"},
      { userId: 2, postTypeId: 2, title:"My Favorite Murder - Episode 242"},
      { userId: 5, postTypeId: 1, title:"Tyconderoga"},
      { userId: 4, postTypeId: 4},
      { userId: 3, postTypeId: 2, title:"Serial Napper"},
      { userId: 5, postTypeId: 3, title:"Creepy"},
      { userId: 2, postTypeId: 1, title:"Lamashtu’s Milk"},
      { userId: 1, postTypeId: 1, title:"Starlit Flower"},
      { userId: 3, postTypeId: 1, title:"What Lurks In Shadows"},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
