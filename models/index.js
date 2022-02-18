const User = require("./User");
const Profile = require("./Profile");
const Merch = require("./Merch");
const Post = require("./Post");
const Comments = require("./Comments");

// Profile.hasMany(Post, {
//     foreignKey: 'profile_id',
// });

// Profile.hasMany(Comments, {
//     foreignKey: 'comments_id',
// });

module.exports = { User, Profile, Merch, Post, Comments };
