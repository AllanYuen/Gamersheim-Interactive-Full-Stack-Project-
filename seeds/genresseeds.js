// Import necessary modules
const { Genres } = require('../models');

// Seed data for the Genres table
const genreSeedData = [
  {
    GenreName: 'Action',
  },
  {
    GenreName: 'Adventure',
  },
  {
    GenreName: 'RPG',
  },
  // Add more genres as needed
];

// Function to seed the Genres table
const seedGenres = async () => {
  try {
    // Sync the model
    await sequelize.sync({ force: true });

    // Create records in the Genres table
    await Genres.bulkCreate(genreSeedData);

    console.log('Genres seeded successfully');
  } catch (err) {
    console.error('Error seeding genres:', err);
  }
};

// Call the seed function
seedGenres();