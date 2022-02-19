const { User } = require("../models");

const userSeedData = [
  {
    pog_username: "saviecee",
    password: "PeterBrown",
    email: "saviecee@aol.com",
  },

  {
    pog_username: "tactileindicator",
    password: "iloveyou",
    email: "verynice@hotmail.com",
  },

  {
    pog_username: "holeinthesun",
    password: "isthatso?",
    email: "trainedprofessional@gmail.com",
  },
  {
    pog_username: "carfire",
    password: "songs4you",
    email: "lbrownhubbard@icloud.com",
  },
  {
    pog_username: "7housesofparliament",
    password: "se7endevils",
    email: "guccigurl@aol.com",
  },
  {
    pog_username: "killkarl",
    password: "th3dayisdone",
    email: "theonewhoknocks@hotmail.com",
  },
  {
    pog_username: "Adam",
    password: "password1",
    email: "adam@mail.com",
  },
  {
    pog_username: "PoopMonster",
    password: "password1",
    email: "pooopmonster987@gmail.com",
  },

];

const userData = () => User.bulkCreate(userSeedData);

module.exports = userData;
