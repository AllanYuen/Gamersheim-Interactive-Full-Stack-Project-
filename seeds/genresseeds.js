// Import necessary modules
const { Genres } = require('../models');

// Seed data for the Genres table
const genreSeedData = [
  {
    genre_id: '1',
    genre_name: 'Action',
  },
  {
    genre_id: '2',
    genre_name: 'Adventure',
  },
  {
    genre_id: '3',
    genre_name: 'Multiplayer',
  },
  {
    genre_id: '4',
    genre_name: 'Racing',
  },
  {
    genre_id: '5',
    genre_name: 'RPG',
  },
  {
    genre_id: '6',
    genre_name: 'Simulation',
  },
  {
    genre_id: '7',
    genre_name: 'Sports',
  },
  {
    genre_id: '8',
    genre_name: 'Strategy',
  },
  {
    genre_id: '9',
    genre_name: 'Horror',
  },
  {
    genre_id: '10',
    genre_name: 'Shooter',
  },
  {
    genre_id: '11',
    genre_name: 'Fighting',
  },
  {
    genre_id: '12',
    genre_name: 'Side Scrolling',
  },
  {
    genre_id: '13',
    genre_name: 'Hack and Slash',
  },
  {
    genre_id: '14',
    genre_name: 'platform',
  }
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