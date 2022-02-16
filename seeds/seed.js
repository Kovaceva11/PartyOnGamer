const sequelize = require("../config/connection");
const { Login, Merch, Post, Profile, User } = require("../models");

const profileData = require("./profileSeedData");
const merchData = require("./merchSeedData");
const userData = require("./userSeedData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await profileData();
  await merchData();
  await userData();

  process.exit(0);
};

seedDatabase();
