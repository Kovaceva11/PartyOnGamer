const User = require("./User");
const Profile = require("./Profile");
const Merch = require("./Merch");
const Post = require("./Post");
const Comments = require("./Comments");

// User.hasMany(Project, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Project.belongsTo(User, {
//   foreignKey: "user_id",
// });

module.exports = { User, Profile, Merch, Post, Comments };
