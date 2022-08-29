const {DataTypes} = require('sequelize')
const sequelize = require('../config/sequelize')

const Products = sequelize.define("products", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(12, 2),
    images: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.STRING,
    category: DataTypes.STRING, 
    alt: DataTypes.STRING,
    size: DataTypes.ARRAY(DataTypes.STRING)
});

module.exports = Products;