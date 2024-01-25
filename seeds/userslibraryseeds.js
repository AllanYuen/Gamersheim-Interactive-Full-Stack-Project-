// Import necessary modules
const { Users_Library } = require('../models');

// Seed data for the Users_Library table
const usersLibrarySeedData = [
  {
    library_id: '',
    user_id: '',
    game_id: '',
    platform_id: '',
    played: '',
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