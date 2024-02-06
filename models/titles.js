const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Titles extends Model {}

Titles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      title_images: {
        type: DataTypes.STRING,
        allowNull: true,
      },      
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'title',
    },
);

module.exports = Titles


