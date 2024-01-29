// Import necessary modules
const { Platforms } = require('../models');

// Seed data for the Platform table
const platformSeedData = [
  {

    platform_name: 'Playstation 2',
  },
  {
 
    platform_name: 'Playstation 3',
  },
  {

    platform_name: 'Playstation 4',
  },
  {

    platform_name: 'Playstation 5',
  },
  {

    platform_name: 'XBox',
  },
  {
  
    platform_name: 'XBox 360',
  },
  {
  
    platform_name: 'XBox One',
  },
  {
   
    platform_name: 'XBox Series X',
  },
  {
 
    platform_name: 'PC',
  },
  {
 
    platform_name: 'Nintendo Switch',
  },
  {

    platform_name: 'Android',
  },
  {

    platform_name: 'Apple',
  },
  {

    platform_name: 'Retro Console',
  },
  {

    platform_name: 'other',
  },
];

const seedPlatform = () => Platforms.bulkCreate(platformSeedData);

module.exports = seedPlatform;