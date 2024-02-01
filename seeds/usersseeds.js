// Import necessary modules
const { Users } = require('../models');

// Seed data for the Users table
const usersSeedData = [
  { 
    firstname: 'Ozdal',
    lastname: 'Dogru',
    email: 'OzdalDogru@email.com',
    password: 'password1',
  },
  {
    firstname: 'Allan',
    lastname: 'Yuen',
    email: 'AllanYuen@email.com',
    password: 'password2',
  },
  {
    firstname: 'Matthew',
    lastname: 'Beaubien',
    email: 'MatthewBeaubien@email.com',
    password: 'password3',
  },
  {
    firstname: 'Charlotte',
    lastname: 'Marchildon',
    email: 'CharlotteMarchildon@email.com',
    password: 'password4',
  },
  {
    firstname: 'Justin',
    lastname: 'Lee',
    email: 'JustinLee@email.com',
    password: 'password5',
  },
];

const seedUsers = () => Users.bulkCreate(usersSeedData);

module.exports = seedUsers;
