// Import necessary modules
const { Titles } = require('../models/titles');

// Seed data for the Platform table
const titlesSeedData = [

  { 
    id: 1,
    name: 'Games',
  },
  {
    id: 2,
    name: 'Genres',
  },
  {
    id: 3,
    name: 'Platforms',
  },
];


const seedTitles = () => Titles.createBulk(titlesSeedData);
module.exports = seedTitles;