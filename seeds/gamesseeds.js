// gamesseeds.js
const { Game } = require('../models');

const gamesData = [
  // Your game seed data
  // Example: { title: 'Game 1', description: 'Description 1', ... }
];

const seed = async () => {
  await Game.bulkCreate(gamesData);
};

module.exports = { seed };