const router = require("express").Router();

const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");
const merchRoutes = require("./merch.js");

router.use("/users", userRoutes);
router.use("/profiles", profileRoutes);
router.use("/merch", merchRoutes);

module.exports = router;
