const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// const bcrypt = require('bcrypt');

class Category extends Model {}

Category.init(
  {
    // define an id columns
    id: { 
      //Integer     
      type: DataTypes.INTEGER, 
      // Doesn't allow null values
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses auto increment
      autoIncrement: true
    },
    // category_name
    category_name: {
      //string
      type: DataTypes.STRING,
      //doesn't allow null values
      allowNull: false
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
