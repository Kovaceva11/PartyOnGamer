const { User } = require("../models");

const userSeedData = [
  {
    username: "saviecee",
    password: "PeterBrown",
    email: "saviecee@aol.com",
  },

  {
    username: "tactileindicator",
    password: "iloveyou",
    email: "verynice@hotmail.com",
  },

  {
    username: "holeinthesun",
    password: "isthatso?",
    email: "trainedprofessional@gmail.com",
  },
  {
    username: "carfire",
    password: "songs4you",
    email: "lbrownhubbard@icloud.com",
  },
  {
    username: "7housesofparliament",
    password: "se7endevils",
    email: "guccigurl@aol.com",
  },
  {
    username: "killkarl",
    password: "th3dayisdone",
    email: "theonewhoknocks@hotmail.com",
  },
];

const userData = () => User.bulkCreate(userSeedData);

module.exports = userData;
