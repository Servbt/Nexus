const User = require('./User');
const Game = require('./Game');
const Review = require('./Review');
const Tag = require('./Tag');

Game.belongsToMany(User, {
  through: Tag,
  unique: false,
});

User.belongsToMany(Game, {
  through: Tag,
  unique: false
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Game.hasMany(Review, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Game,
  Review,
  Tag,
};