const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model {}

Games.init(
    {
        GameID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          Title: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          GenreID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'Genres',
              key: 'GenreID',
            },
          },
          Publisher: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          PlatformID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'Platforms',
              key: 'PlatformID',
            },
          },
          ReleaseYear: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          GameDescription: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Features: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          CoverImage: {
            type: DataTypes.JSONB,
            allowNull: true,
          },
          Trailer: {
            type: DataTypes.JSONB,
            allowNull: true,
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'games',
      }
);