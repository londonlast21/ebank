const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const seedProductTags = require('../seeds/product-tag-seeds.js');
const { Product } = require('./index.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
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
