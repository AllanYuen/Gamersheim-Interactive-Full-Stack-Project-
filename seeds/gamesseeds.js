// Import necessary modules
const { Games, Genres, Platforms } = require('../models');

// Seed data for the Games table
const gameSeedData = [
  {
    Title: 'Sample Game 1',
    GenreID: 1, // Replace with actual GenreID
    Publisher: 'Sample Publisher 1',
    PlatformID: 1, // Replace with actual PlatformID
    ReleaseYear: new Date('2022-01-01'),
    GameDescription: 'Description for Sample Game 1',
    Features: 'Features for Sample Game 1',
    CoverImage: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    Title: 'Sample Game 2',
    GenreID: 2, // Replace with actual GenreID
    Publisher: 'Sample Publisher 2',
    PlatformID: 2, // Replace with actual PlatformID
    ReleaseYear: new Date('2022-02-01'),
    GameDescription: 'Description for Sample Game 2',
    Features: 'Features for Sample Game 2',
    CoverImage: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  // Add more sample data as needed
];

// Function to seed the Games table
const seedGames = async () => {
  try {
    // Sync the model
    await sequelize.sync({ force: true });

    // Create records in the Games table
    await Games.bulkCreate(gameSeedData);

    console.log('Games seeded successfully');
  } catch (err) {
    console.error('Error seeding games:', err);
  }
};

// Call the seed function
seedGames();