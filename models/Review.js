const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Game = require('./game');

class Review extends Model { }

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    review_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'games',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;