// Import necessary modules
const { Platforms } = require('../models');

// Seed data for the Platform table
const platformSeedData = [
  {
    name: 'Playstation 2',
    image: 'ps2.jpeg',
  },
  {
   name: 'Playstation 3',
   image: 'ps3.png',
  },
  {
   name: 'Playstation 4',
   image: 'ps4.jpeg',
  },
  {
   name: 'Playstation 5',
   image: 'ps5.jpeg',
  },
  {
   name: 'XBox',
   image: 'xbox.jpeg',
  },
  {
   name: 'XBox 360',
   image: 'xbox360.jpeg',
  },
  {
   name: 'XBox One',
   image: 'xboxone.jpeg',
  },
  {   
   name: 'XBox Series X',
   image: 'xboxsx.jpeg',
  },
  {
    name: 'PC',
    image: 'pc.jpeg',
  },
  {
    name: 'Nintendo Switch',
    image: 'nswitch.jpeg',
  },
  {
    name: 'Android',
    image: 'android.jpeg',
  },
  {
    name: 'Apple',
    image: 'apple.jpeg',
  },
  {
    name: 'Retro Console',
    image: 'retro.jpeg',
  },

];

const seedPlatform = () => Platforms.bulkCreate(platformSeedData);

module.exports = seedPlatform;