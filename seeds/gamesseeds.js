// Import necessary modules
const { Games } = require('../models');

// Seed data for the Games table
const gameSeedData = [
  {
    id: '1',
    title: 'Age of Empires 4',
    Genre: 8, //'strategy',
    Publisher: 'Microsoft',
    Platform: 9, //'PC', 
    Release_Year: new Date('2005'),
    Game_Description: 'Description for Age of Empires 4',
    Features: 'Features for Age of Empires 4',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    id: '2',
    title: 'Batman: arkham knight',
    Genre: 1, //'action',
    Publisher: 'Warner Bros',
    Platform: 2, //'Playstation 3', 
    Release_Year: new Date('2015'),
    Game_Description: 'Description for Batman: arkham knight',
    Features: 'Features for Batman: arkham knight',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    id: '3',
    title: 'Bayonetta',
    Genre: 13, //'Hack and Slash',
    Publisher: 'Nintendo',
    Platform: 10, //'Nintendo Switch', 
    Release_Year: new Date('2009'),
    Game_Description: 'Description for Bayonetta',
    Features: 'Features for Bayonetta',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    id: '4',
    title: 'Cyberpunk 2077',
    Genre: 5, //'RPG',
    Publisher: 'CD Projekt',
    Platform: 3, //'Playstation 4', 
    Release_Year: new Date('2020'),
    Game_Description: 'Description for Cyberpunk 2077',
    Features: 'Features for Cyberpunk 2077',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    id: '5',
    title: 'Dark Souls 3',
    Genre: 5, //'RPG',
    Publisher: 'Bandai Namco',
    Platform: 7, //'Xbox one', 
    Release_Year: new Date('2016'),
    Game_Description: 'Description for Dark Souls 3',
    Features: 'Features for Dark Souls 3',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    id: '6',
    title: 'ELDEN RING',
    Genre: 5, //'RPG',
    Publisher: 'Bandai Namco',
    Platform: 4, //'Playstation 5', 
    Release_Year: new Date('2022'),
    Game_Description: 'Description for ELDEN RING',
    Features: 'Features for ELDEN RING',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    id: '7',
    title: 'Grand Theft Auto Trilogy',
    Genre: 2, //'adventure',
    Publisher: 'Rockstar Games',
    Platform: 8, //'Xbox Series X', 
    Release_Year: new Date('2021'),
    Game_Description: 'Description for Grand Theft Auto Trilogy',
    Features: 'Features for Grand Theft Auto Trilogy',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    id: '8',
    title: 'Halo: Combat Evolved',
    Genre: 10, //'shooter',
    Publisher: 'Microsoft',
    Platform: 5, //'Xbox', 
    Release_Year: new Date('2001'),
    Game_Description: 'Description for Halo: Combat Evolved',
    Features: 'Features for Halo: Combat Evolved',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    id: '9',
    title: 'Mario Kart 8 Deluxe',
    Genre: 4, //'racing',
    Publisher: 'Nintendo',
    Platform: 10, //'Nintendo Switch', 
    Release_Year: new Date('2014'),
    Game_Description: 'Description for Mario Kart 8 Deluxe',
    Features: 'Features for Mario Kart 8 Deluxe',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
    Trailer: { /* Your JSONB data for Trailer */ },
  },
  {
    id: '10',
    title: 'Minecraft',
    Genre: 8, //'strategy',
    Publisher: 'Mojang Studios',
    Platform: 9, //'PC', 
    Release_Year: new Date('2011'),
    Game_Description: 'Description for Minecraft',
    Features: 'Features for Minecraft',
    Cover_Image: { /* Your JSONB data for CoverImage */ },
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