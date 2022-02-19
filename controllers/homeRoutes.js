const router = require("express").Router();
const sequelize = require("../config/connection");
const { Profile, User, Comments, Merch } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/merch", async (req,res) => {
  try {
    const dbMerchData = await Merch.findAll({});

    const merchData = dbMerchData.map((merch) => merch.get({ plain: true }));

    res.render("store", { merchData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/merch/:id", async (req, res) => {
  try {
    const dbMerchData = await Merch.findByPk(req.params.id, {});

    const merchData = [dbMerchData.get({ plain: true })];
    res.render("store", { merchData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profiles',(req,res) => {
  res.render('profile');
})

module.exports = router;
