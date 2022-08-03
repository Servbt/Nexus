const User = require('./User');
const Review = require('./Review');
// const Comment = require('./Comment');
const Game = require('./Game');

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Game, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE'
});

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Game.hasMany(Review, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE'
})


module.exports = {
  User,
  Review,
  Game
};