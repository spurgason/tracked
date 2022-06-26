const router = require("express").Router();
const characterRoutes = require("./characterRoutes");

router.use("/character", characterRoutes);

module.exports = router;
