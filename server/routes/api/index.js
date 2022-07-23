const router = require("express").Router();
const assignmentRoutes = require("./assignmentRoutes");
const userRoutes = require("./userRoutes");

router.use("/assignments", assignmentRoutes);
router.use("/users", userRoutes);

module.exports = router;
