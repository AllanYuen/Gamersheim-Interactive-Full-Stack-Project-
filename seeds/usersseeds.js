// Import necessary modules
const { Users } = require('../models');

// Seed data for the Users table
const usersSeedData = [
  {
 
    user_name: 'OzdalDogru',
    first_name: 'Ozdal',
    last_name: 'Dogru',
    email: 'OzdalDogru@email.com',
    password: 'password1',
  },
  {

    user_name: 'AllanYuen',
    first_name: 'Allan',
    last_name: 'Yuen',
    email: 'AllanYuen@email.com',
    password: 'password2',
  },
  {

    user_name: 'MatthewBeaubien',
    first_name: 'Matthew',
    last_name: 'Beaubien',
    email: 'MatthewBeaubien@email.com',
    password: 'password3',
  },
  {

    user_name: 'CharlotteMarchildon',
    first_name: 'Charlotte',
    last_name: 'Marchildon',
    email: 'CharlotteMarchildon@email.com',
    password: 'password4',
  },
  {

    user_name: 'JustinLee',
    first_name: 'Justin',
    last_name: 'Lee',
    email: 'JustinLee@email.com',
    password: 'password5',
  },
];

const seedUsers = () => Users.bulkCreate(usersSeedData);

module.exports = seedUsers;
