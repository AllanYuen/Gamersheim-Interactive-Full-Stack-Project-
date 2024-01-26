const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserLibrary extends Model {}

UserLibrary.init(
    {
      library_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      platform_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
      },
      played: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
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

module.exports = UserLibrary