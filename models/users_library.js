const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users_Library extends Model {}

Users_Library.init(
    {
        LibraryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'UserID',
            },
          },
          GameID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'games',
              key: 'GameID',
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users_library',
      }
);