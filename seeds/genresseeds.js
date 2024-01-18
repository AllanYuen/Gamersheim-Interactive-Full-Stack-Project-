// genresseeds.js
const { Genre } = require('../models');

const genresData = [
  // Your genre seed data
  // Example: { name: 'Action' }
];

const seed = async () => {
  await Genre.bulkCreate(genresData);
};

module.exports = { seed };