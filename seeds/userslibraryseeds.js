// Import necessary modules
const { UserLibrary } = require('../models');

// Seed data for the Users_Library table
const usersLibrarySeedData = [
  {
    library_id: 1,
    user_id: 1,
    game_id: 1,
    platform_id: 1,
    played: 'true',
  },
  // Add more entries as needed
];


const seedLibrary = () => UserLibrary.bulkCreate(usersLibrarySeedData);

module.exports = seedLibrary;