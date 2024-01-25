const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genres extends Model {}

Genres.init(
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      genre_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'genres',
      }
);