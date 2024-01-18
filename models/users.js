const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {}

Users.init(
    {
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          UserName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          FirstName: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          LastName: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          PasswordSalt: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
      }
);