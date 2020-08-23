const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // column 2: name of db
    databaseName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // column 3 : mySql username
    mySqlUsername: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // column 4 my sql password
    mySqlPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
