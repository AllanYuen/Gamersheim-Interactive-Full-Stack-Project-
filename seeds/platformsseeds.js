// Import necessary modules
const { Platform } = require('../models');

// Seed data for the Platform table
const platformSeedData = [
  {
    Platform: 'PC',
  },
  {
    Platform: 'PlayStation',
  },
  {
    Platform: 'Xbox',
  },
  // Add more platforms as needed
];

// Function to seed the Platform table
const seedPlatforms = async () => {
  try {
    // Sync the model
    await sequelize.sync({ force: true });

    // Create records in the Platform table
    await Platform.bulkCreate(platformSeedData);

    console.log('Platforms seeded successfully');
  } catch (err) {
    console.error('Error seeding platforms:', err);
  }
};

// Call the seed function
seedPlatforms();