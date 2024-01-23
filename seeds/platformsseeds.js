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
    genre_name: 'Playstation 3',
  },
  {
    id:'3',
    genre_name: 'Playstation 4',
  },
  {
    id:'4',
    genre_name: 'Playstation 5',
  },
  {
    id:'5',
    genre_name: 'XBox',
  },
  {
    id:'6',
    genre_name: 'XBox 360',
  },
  {
    id:'7',
    genre_name: 'XBox One',
  },
  {
    id:'8',
    genre_name: 'XBox Series X',
  },
  {
    id:'9',
    genre_name: 'PC',
  },
  {
    id:'10',
    genre_name: 'Nintendo Switch',
  },
  {
    id:'11',
    genre_name: 'Android',
  },
  {
    id:'12',
    genre_name: 'Apple',
  },
  {
    id:'13',
    genre_name: 'Retro Console',
  },
  {
    id:'14',
    genre_name: 'other',
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