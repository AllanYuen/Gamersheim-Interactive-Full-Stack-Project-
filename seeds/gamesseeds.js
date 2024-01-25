// Import necessary modules
const { Games } = require('../models');

// Seed data for the Games table
const gameSeedData = [
  {
    game_id: '1',
    title: 'Age of Empires 4',
    genre_id: 8, //'strategy',
    publisher: 'Microsoft',
    platform_id: 9, //'PC', 
    release_year: new Date('2005'),
    game_description: 'Description for Age of Empires 4',
    features: 'Features for Age of Empires 4',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    game_id: '2',
    title: 'Batman: arkham knight',
    genre_id: 1, //'action',
    publisher: 'Warner Bros',
    platform_id: 2, //'Playstation 3', 
    release_year: new Date('2015'),
    game_description: 'Description for Batman: arkham knight',
    features: 'Features for Batman: arkham knight',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    game_id: '3',
    title: 'Bayonetta',
    genre_id: 13, //'Hack and Slash',
    publisher: 'Nintendo',
    platform_id: 10, //'Nintendo Switch', 
    release_year: new Date('2009'),
    game_description: 'Description for Bayonetta',
    features: 'Features for Bayonetta',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    game_id: '4',
    title: 'Cyberpunk 2077',
    genre_id: 5, //'RPG',
    publisher: 'CD Projekt',
    platform_id: 3, //'Playstation 4', 
    release_year: new Date('2020'),
    game_description: 'Description for Cyberpunk 2077',
    features: 'Features for Cyberpunk 2077',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    game_id: '5',
    title: 'Dark Souls 3',
    genre_id: 5, //'RPG',
    publisher: 'Bandai Namco',
    platform_id: 7, //'Xbox one', 
    release_year: new Date('2016'),
    game_description: 'Description for Dark Souls 3',
    features: 'Features for Dark Souls 3',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    game_id: '6',
    title: 'ELDEN RING',
    genre_id: 5, //'RPG',
    publisher: 'Bandai Namco',
    platform_id: 4, //'Playstation 5', 
    release_year: new Date('2022'),
    game_description: 'Description for ELDEN RING',
    features: 'Features for ELDEN RING',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    game_id: '7',
    title: 'Grand Theft Auto Trilogy',
    genre_id: 2, //'adventure',
    publisher: 'Rockstar Games',
    platform_id: 8, //'Xbox Series X', 
    release_year: new Date('2021'),
    game_description: 'Description for Grand Theft Auto Trilogy',
    features: 'Features for Grand Theft Auto Trilogy',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    game_id: '8',
    title: 'Halo: Combat Evolved',
    genre_id: 10, //'shooter',
    publisher: 'Microsoft',
    platform_id: 5, //'Xbox', 
    release_year: new Date('2001'),
    game_description: 'Description for Halo: Combat Evolved',
    features: 'Features for Halo: Combat Evolved',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    game_id: '9',
    title: 'Mario Kart 8 Deluxe',
    genre_id: 4, //'racing',
    publisher: 'Nintendo',
    platform_id: 10, //'Nintendo Switch', 
    release_year: new Date('2014'),
    game_description: 'Description for Mario Kart 8 Deluxe',
    features: 'Features for Mario Kart 8 Deluxe',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    game_id: '10',
    title: 'Minecraft',
    genre_id: 8, //'strategy',
    publisher: 'Mojang Studios',
    platform_id: 9, //'PC', 
    release_year: new Date('2011'),
    game_description: 'Description for Minecraft',
    features: 'Features for Minecraft',
    cover_image: { /* Your JSONB data for CoverImage */ },
    trailer: { /* Your JSONB data for Trailer */ },
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