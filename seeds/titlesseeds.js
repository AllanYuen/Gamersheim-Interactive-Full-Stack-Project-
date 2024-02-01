// Import necessary modules
const { Titles } = require('../models');

// Seed data for the Platform table
const titlesSeedData = [

  { 
     name: 'Games',
  },
  {
    name: 'Genres',
  },
  {
    name: 'Platforms',
  },
];

const seedTitles = () => Titles.bulkCreate(titlesSeedData);
module.exports = seedTitles;
