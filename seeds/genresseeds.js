// Import necessary modules
const { Genres } = require('../models');

// Seed data for the Genres table
const genreSeedData = [
  {
    id:'1',
    genre_name: 'Action',
  },
  {
    id:'2',
    genre_name: 'Adventure',
  },
  {
    id:'3',
    genre_name: 'Multiplayer',
  },
  {
    id:'4',
    genre_name: 'Racing',
  },
  {
    id:'5',
    genre_name: 'RPG',
  },
  {
    id:'6',
    genre_name: 'Simulation',
  },
  {
    id:'7',
    genre_name: 'Sports',
  },
  {
    id:'8',
    genre_name: 'Strategy',
  },
  {
    id:'9',
    genre_name: 'Horror',
  },
  {
    id:'10',
    genre_name: 'Shooter',
  },
  {
    id:'11',
    genre_name: 'Fighting',
  },
  {
    id:'12',
    genre_name: 'Side Scrolling',
  },
  {
    id:'13',
    genre_name: 'Hack and Slash',
  },
  {
    id:'14',
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