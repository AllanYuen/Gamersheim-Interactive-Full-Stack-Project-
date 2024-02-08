// Import necessary modules
const { Genres } = require('../models');

// Seed data for the Genres table
const genreSeedData = [
  {
    id: 1,
    name: 'Action',
    genre_image: '/images/Action.jpeg',

  },
  {
    id: 2,    
    name: 'Adventure',
    genre_image: '/images/Adventure.jpeg',
  },
  {
    id: 3,
    name: 'Multiplayer',
    genre_image: '/images/Multiplayer.jpeg',
  },
  {
    id: 4,    
    name: 'Racing',
    genre_image: '/images/Racing.jpeg',
  },
  {
    id: 5,    
    name: 'RPG',
    genre_image: '/images/RPG.jpeg',
  },
  {
    id: 6,    
    name: 'Simulation',
    genre_image: '/images/Simulation.jpeg',
  },
  {
    id: 7,    
    name: 'Sports',
    genre_image: '/images/Sports.jpeg',
  },
  {
    id: 8,    
    name: 'Strategy',
    genre_image: '/images/Strategy.jpeg',
  },
  {
    id: 9,    
    name: 'Horror',
    genre_image: '/images/Horror.jpeg',
  },
  {
    id: 10,    
    name: 'Shooter',
    genre_image: '/images/Shooter.jpeg',
  },
  {
   id: 11,    
    name: 'Fighting',
    genre_image: '/images/Fighting.jpeg',
  },
  {
    id: 12,    
    name: 'Side Scrolling',
    genre_image: '/images/SideScrolling.jpeg',
  },
  {
    id: 13,    
    name: 'Hack and Slash',
    genre_image: '/images/HackandSlash.jpeg',
  },
  {
    id: 14,    
    name: 'Platform',
    genre_image: '/images/Platform.jpeg',
  },
];

const seedGenres = () => Genres.bulkCreate(genreSeedData);

module.exports = seedGenres;