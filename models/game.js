const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model { }

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    game: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'game',
  }
);

module.exports = Game;
