const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a new Sequelize model for login
class Merch extends Model {}

Merch.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

  imageURL: {type: DataTypes.STRING

  },

    itemName: {
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "merch",
  }
);

module.exports = Merch;
