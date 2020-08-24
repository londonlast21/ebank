// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category.id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey:'category.id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through:'ProductTag',
  as: 'tagged_product',
  foreignKey:'tag.id'

})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  as: 'tagged_product',
  foreignKey:'product.id'
} )

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
