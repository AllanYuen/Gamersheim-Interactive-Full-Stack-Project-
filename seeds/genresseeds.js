// Import necessary modules
const { Genres } = require('../models');

// Seed data for the Genres table
const genreSeedData = [
  {
    name: 'Action',
    genre_image: '/images/Action.jpeg',

  },
  {
    name: 'Adventure',
    genre_image: '/images/Adventure.jpeg',
  },
  {
    name: 'Multiplayer',
    genre_image: '/images/Multiplayer.jpeg',
  },
  {
     name: 'Racing',
     genre_image: '/images/Racing.jpeg',
  },
  {
     name: 'RPG',
     genre_image: '/images/RPG.jpeg',
  },
  {
    name: 'Simulation',
    genre_image: '/images/Simulation.jpeg',
  },
  {
    name: 'Sports',
    genre_image: '/images/Sports.jpeg',
  },
  {
    name: 'Strategy',
    genre_image: '/images/Strategy.jpeg',
  },
  {
    name: 'Horror',
    genre_image: '/images/Horror.jpeg',
  },
  {
    name: 'Shooter',
    genre_image: '/images/Shooter.jpeg',
  },
  {
     name: 'Fighting',
     genre_image: '/images/Fighting.jpeg',
  },
  {
    name: 'SideScrolling',
    genre_image: '/images/SideScrolling.jpeg',
  },
  {
    name: 'HackandSlash',
    genre_image: '/images/HackandSlash.jpeg',
  },
  {
    name: 'Platform',
    genre_image: '/images/Platform.jpeg',
  },
];

const seedGenres = () => Genres.bulkCreate(genreSeedData);

module.exports = seedGenres;