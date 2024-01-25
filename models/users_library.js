const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users_Library extends Model {}

Users_Library.init(
    {
      library_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
          },
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'games',
          key: 'game_id',
          },
      },
      platform_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      played: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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