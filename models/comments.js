const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
     /*   references: {
          model: 'user',
          key: 'id',
        }, */
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    /*  comment_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: get.DATE(),
      }, */
      game_name: {
        type: DataTypes.STRING,
        allowNull: false,
     /*   references: {
          model: 'game',
          key: 'title',
        }, */
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
);

module.exports = Comments