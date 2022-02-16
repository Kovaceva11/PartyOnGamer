const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for profile
class post extends Model {}

post.init(

    {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
    },
    
        post: {
            type: DataTypes.String,
            allowNull: false,
            unique: true
        }
    },

    {
        // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: false,
        underscored: true,
        modelName: 'post'
      }
    );

    module.exports = post;

