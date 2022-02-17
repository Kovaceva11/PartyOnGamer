const { User } = require("../models");

const userSeedData = [
  {
    pogUsername: "saviecee",
    password: "PeterBrown",
    email: "saviecee@aol.com",
  },

  {
    pogUsername: "tactileindicator",
    password: "iloveyou",
    email: "verynice@hotmail.com",
  },

  {
    pogUsername: "holeinthesun",
    password: "isthatso?",
    email: "trainedprofessional@gmail.com",
  },
  {
    pogUsername: "carfire",
    password: "songs4you",
    email: "lbrownhubbard@icloud.com",
  },
  {
    pogUsername: "7housesofparliament",
    password: "se7endevils",
    email: "guccigurl@aol.com",
  },
  {
    pogUsername: "killkarl",
    password: "th3dayisdone",
    email: "theonewhoknocks@hotmail.com",
  },
];

const userData = () => User.bulkCreate(userSeedData);

module.exports = userData;
