// Import necessary modules
const { Titles } = require('../models');

// Seed data for the Platform table
const titlesSeedData = [

  { 
     name: 'Games',
     title_images: '/images/games',
  },
  {
    name: 'Genres',
    title_images: '/images/genres',
  },
  {
    name: 'Platforms',
    title_images: '/images/platforms',
  },
];

const seedTitles = () => Titles.bulkCreate(titlesSeedData);
module.exports = seedTitles;
