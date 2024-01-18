// usersseeds.js
const { User } = require('../models');

const usersData = [
  // Your user seed data
  // Example: { username: 'user1', email: 'user1@example.com', password: 'password1' }
];

const seed = async () => {
  await User.bulkCreate(usersData);
};

module.exports = { seed };