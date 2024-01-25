// Import necessary modules
const { Platform } = require('../models');

// Seed data for the Platform table
const platformSeedData = [
  {
    id:'1',
    platform_name: 'Playstation 2',
  },
  {
    id:'2',
    platform_name: 'Playstation 3',
  },
  {
    id:'3',
    platform_name: 'Playstation 4',
  },
  {
    id:'4',
    platform_name: 'Playstation 5',
  },
  {
    id:'5',
    platform_name: 'XBox',
  },
  {
    id:'6',
    platform_name: 'XBox 360',
  },
  {
    id:'7',
    platform_name: 'XBox One',
  },
  {
    id:'8',
    platform_name: 'XBox Series X',
  },
  {
    id:'9',
    platform_name: 'PC',
  },
  {
    id:'10',
    platform_name: 'Nintendo Switch',
  },
  {
    id:'11',
    platform_name: 'Android',
  },
  {
    id:'12',
    platform_name: 'Apple',
  },
  {
    id:'13',
    platform_name: 'Retro Console',
  },
  {
    id:'14',
    platform_name: 'other',
  }
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