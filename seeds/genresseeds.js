// Import necessary modules
const { Genres } = require('../models');

// Seed data for the Genres table
const genreSeedData = [
  {
    name: 'Action',
  },
  {
    name: 'Adventure',
  },
  {
    name: 'Multiplayer',
  },
  {
     name: 'Racing',
  },
  {
     name: 'RPG',
  },
  {
    name: 'Simulation',
  },
  {
    name: 'Sports',
  },
  {
    name: 'Strategy',
  },
  {
    name: 'Horror',
  },
  {
    name: 'Shooter',
  },
  {
     name: 'Fighting',
  },
  {
    name: 'SideScrolling',
  },
  {
    name: 'HackandSlash',
  },
  {
    name: 'Platform',
  },
];

const seedGenres = () => Genres.bulkCreate(genreSeedData);

module.exports = seedGenres;