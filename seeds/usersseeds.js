// Import necessary modules
const { Users } = require('../models');

// Seed data for the Users table
const usersSeedData = [
  {
    UserName: 'user1',
    FirstName: 'John',
    LastName: 'Doe',
    Email: 'user1@example.com',
    PasswordSalt: 'sample_salt_1',
  },
  {
    UserName: 'user2',
    FirstName: 'Jane',
    LastName: 'Doe',
    Email: 'user2@example.com',
    PasswordSalt: 'sample_salt_2',
  },
  // Add more user data as needed
];

// Function to seed the Users table
const seedUsers = async () => {
  try {
    // Sync the model
    await sequelize.sync({ force: true });

    // Create records in the Users table
    await Users.bulkCreate(usersSeedData);

    console.log('Users seeded successfully');
  } catch (err) {
    console.error('Error seeding Users:', err);
  }
};

// Call the seed function
seedUsers();