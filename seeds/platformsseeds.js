// Import necessary modules
const { Platforms } = require('../models');

// Seed data for the Platform table
const platformSeedData = [
  {
    name: 'Playstation 2',
  },
  {
   name: 'Playstation 3',
  },
  {
   name: 'Playstation 4',
  },
  {
   name: 'Playstation 5',
  },
  {
   name: 'XBox',
  },
  {
   name: 'XBox 360',
  },
  {
   name: 'XBox One',
  },
  {   
   name: 'XBox Series X',
  },
  {
    name: 'PC',
  },
  {
    name: 'Nintendo Switch',
  },
  {
    name: 'Android',
  },
  {
    name: 'Apple',
  },
  {
    name: 'Retro Console',
  },
  {
    name: 'other',
  },
];

const seedPlatform = () => Platforms.bulkCreate(platformSeedData);

module.exports = seedPlatform;