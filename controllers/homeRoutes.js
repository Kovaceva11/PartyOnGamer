const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  // console.log(req.session);
  // res.sendFile(path.join(__dirname, './views/layout/main'))
  res.render("login");
});

module.exports = router;
