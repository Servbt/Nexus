const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Game extends Model { }

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    game: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platform: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.DECIMAL(4, 2)
    },
    genre: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'game'
  }
);

module.exports = Game;