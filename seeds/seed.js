const sequelize = require('../config/connection');
const { User, Game, Tag, Review } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });
  const users = await User.bulkCreate(userData);
  const reviews = await Review.bulkCreate(reviewData);
  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,

  process.exit(0);
};

seedDatabase();
