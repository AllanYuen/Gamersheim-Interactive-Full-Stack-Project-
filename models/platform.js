const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Platform extends Model {}

Platform.init(
    {
      platform_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      platform_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'platform',
    }
);