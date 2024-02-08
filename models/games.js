const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model {}

Games.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'genre',
          key: 'id',
        },           
      },
      publisher: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      platform_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'platform',
          key: 'id',
        },    
      },
      release_year: {
        type: DataTypes.INTEGER,
      },
      game_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      features: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cover_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      trailer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
      }
);

module.exports = Games