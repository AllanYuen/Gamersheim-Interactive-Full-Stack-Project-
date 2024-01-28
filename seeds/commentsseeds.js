// Import necessary modules
const { Comments } = require('../models');

// Seed data for the Users_Library table
const commentsSeedData = [
  {
      user_name: 'OzdalDogru',
      message: 'This is the best video game ever',
      comment_date: '25.01.2024',
      game_id: 1
  },
  // Add more entries as needed
];


const seedComments = () => Comments.bulkCreate(commentsSeedData);

module.exports = seedComments;