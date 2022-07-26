const router = require("express").Router();
const {
  registerUser,
  loginUser,
  userData,
} = require("../../controllers/userControllers");
const { protect } = require("../../middleware/authMiddleware");

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/user", protect, userData);

module.exports = router;
