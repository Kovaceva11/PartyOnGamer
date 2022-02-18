const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a new Sequelize model for profile
class Profile extends Model {}

Profile.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves

  {
    pog_username: {
      type: DataTypes.STRING,
    },
    steamID: {
      type: DataTypes.STRING,
    },
    battlenetID: {
      type: DataTypes.STRING,
    },
    twitchID: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },

  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "profile",
  }
);

module.exports = Profile;
