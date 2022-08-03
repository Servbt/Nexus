const User = require('./User');
const Post = require('./Post');
const Comment = require('./Review');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Review, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Review,
  Post
};