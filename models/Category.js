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
    {// return products that are in this category
      SELECT Product.product_name, Category.CategoryID
      FROM Product
      LEFT JOIN Category ON Product.ProductID = Category.ProductID,
      ORDER BY Product.ProductID;
      
    }
  
    
    
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
