// Import necessary modules
const { Users } = require('../models');

// Seed data for the Users table
const usersSeedData = [
  {
    id:'1',
    user_name: 'OzdalDogru',
    first_name: 'Ozdal',
    last_name: 'Dogru',
    email: 'OzdalDogru@email.com',
    password: 'password1',
  },
  {
    id:'2',
    user_name: 'AllanYuen',
    first_name: 'Allan',
    last_name: 'Yuen',
    email: 'AllanYuen@email.com',
    password: 'password2',
  },
  {
    id:'3',
    user_name: 'MatthewBeaubien',
    first_name: 'Matthew',
    last_name: 'Beaubien',
    email: 'MatthewBeaubien@email.com',
    password: 'password3',
  },
  {
    id:'4',
    user_name: 'CharlotteMarchildon',
    first_name: 'Charlotte',
    last_name: 'Marchildon',
    email: 'CharlotteMarchildon@email.com',
    password: 'password4',
  },
  {
    id:'5',
    user_name: 'JustinLee',
    first_name: 'Justin',
    last_name: 'Lee',
    email: 'JustinLee@email.com',
    password: 'password5',
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