'use strict';
const story1 = require("../../seeder-details/story1.js");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PostContents', [
      { postId: 1, description: story1 },
      { postId: 2, description:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gaylydreadful.com%2Fblog%2F2019%2F6%2F15%2Fis-jennifers-body-the-bisexual-horror-film-we-never-knew-we-needed&psig=AOvVaw0UQbkRcS6rZeuONuurAsVU&ust=1609619189040000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj56YTJ--0CFQAAAAAdAAAAABAK", src:"https://static1.squarespace.com/static/5b39608d75f9eef54c62c3f0/5b3965cc758d4623ef4c41e6/5d05609590be8d00016b3a26/1568648538002/jennifers-body-poster.jpg?format=1500w"},
      { postId: 3, description:"Checkout my new podcast!", src:"https://open.spotify.com/embed-podcast/episode/5A4BS0amUfEC7rFa4QVHWg"},
      { postId: 4, description:"this was creepy", src:"https://www.youtube.com/embed/uh_E2AbINE0"},
      { postId: 5, description:"Obsessed with her story-telling", src:"https://open.spotify.com/embed-podcast/episode/2DlBhhBlivwTjhI8LhH74L"},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PostContents', null, {});

  }
};
