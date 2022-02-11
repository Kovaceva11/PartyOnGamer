const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for profile
class profile extends Model {}

profile.init(
    // Define fields/columns on model
    // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
    

{
    birthday: {
    type: DataTypes.STRING
  },
  steamID: {
    type: DataTypes.STRING
  },
  originID: {
    type: DataTypes.STRING
  },
  twitchID: {
    type: DataTypes.STRING
  }
},

{
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'profile'
  }
);

module.exports = profile;