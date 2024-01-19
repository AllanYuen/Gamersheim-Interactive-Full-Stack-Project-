// Import necessary modules
const { Users_Library } = require('../models');

// Seed data for the Users_Library table
const usersLibrarySeedData = [
  {
    UserID: 1, // Replace with an actual UserID from the 'users' table
    GameID: 1, // Replace with an actual GameID from the 'games' table
  },
  {
    UserID: 2, // Replace with another actual UserID
    GameID: 2, // Replace with another actual GameID
  },
  // Add more entries as needed
];

// Function to seed the Users_Library table
const seedUsersLibrary = async () => {
  try {
    // Sync the model
    await sequelize.sync({ force: true });

    // Create records in the Users_Library table
    await Users_Library.bulkCreate(usersLibrarySeedData);

    console.log('Users_Library seeded successfully');
  } catch (err) {
    console.error('Error seeding Users_Library:', err);
  }
};

// Call the seed function
seedUsersLibrary();