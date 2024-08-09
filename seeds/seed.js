const sequelize = require('../config/connection');
const { User, Game, Tag, Review } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const gameData = require('./gameData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });
  // const users = await User.bulkCreate(userData);
  const games = await Game.bulkCreate(gameData);
  // const reviews = await Review.bulkCreate(reviewData);
  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  console.log('Database seeded successfully');
  process.exit(0);
};

seedDatabase();
