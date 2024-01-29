// Import necessary modules
const { Genres } = require('../models');

// Seed data for the Genres table
const genreSeedData = [
  {

    genre_name: 'Action',
  },
  {

    genre_name: 'Adventure',
  },
  {

    genre_name: 'Multiplayer',
  },
  {
   
    genre_name: 'Racing',
  },
  {
 
    genre_name: 'RPG',
  },
  {

    genre_name: 'Simulation',
  },
  {

    genre_name: 'Sports',
  },
  {

    genre_name: 'Strategy',
  },
  {

    genre_name: 'Horror',
  },
  {

    genre_name: 'Shooter',
  },
  {
 
    genre_name: 'Fighting',
  },
  {

    genre_name: 'Side Scrolling',
  },
  {

    genre_name: 'Hack and Slash',
  },
  {

    genre_name: 'platform',
  },
];

const seedGenres = () => Genres.bulkCreate(genreSeedData);

module.exports = seedGenres;