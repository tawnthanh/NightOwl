'use strict';
const story1 = require("../../seeder-details/story1.js");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PostContents', [
      { postId: 1, description: story1 },
      { postId:2, description:"https://hub.jhu.edu/magazine/2019/fall/true-crime-on-her-mind/", src:"../../db/seeder-details/photo1.png"},
      { postId:3, description:"Checkout my new podcast!", src:"https://open.spotify.com/embed-podcast/episode/5A4BS0amUfEC7rFa4QVHWg"},
      { postId:4, description:"this was creepy", src:"https://www.youtube.com/embed/uh_E2AbINE0"},
      { postId:15, description:"Obsessed with her story-telling", src:"https://open.spotify.com/embed-podcast/episode/2DlBhhBlivwTjhI8LhH74L"},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PostContents', null, {});

  }
};
