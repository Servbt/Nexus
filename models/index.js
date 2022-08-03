const User = require('./User');
const Review = require('./Review');
const Game = require('./Game');
const Tag = require('./Tag');

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
});

Game.belongsToMany(User, {
  through: {
    model: Tag,
  }
});

User.belongsToMany(Game, {
  through: {
    model: Tag
  }
});

Review.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = {
  User,
  Review,
  Game,
  Tag
};