// index.js
const { sequelize } = require('../models');
require('dotenv').config();

// Import seed files
const gamesSeeder = require('./gamesseeds');
const genresSeeder = require('./genresseeds');
const platformsSeeder = require('./platformsseeds');
const usersLibrarySeeder = require('./userslibraryseeds');
const usersSeeder = require('./usersseeds');

// Seed the database
const seedAll = async () => {
    await sequelize.sync({ force: true }); // This will drop and recreate tables, use with caution
    console.log('\n----- DATABASE SYNCED -----\n');
    await gamesSeeder();
    console.log('\n----- games SEEDED -----\n');
    await genresSeeder();
    console.log('\n----- genres SEEDED -----\n');
    await platformsSeeder();
    console.log('\n----- platforms SEEDED -----\n');
    await usersLibrarySeeder();
    console.log('\n----- usersLibrary SEEDED -----\n');    
    await usersSeeder();
    console.log('\n----- users SEEDED -----\n');   

    process.exit(0);
};

seedAll();
