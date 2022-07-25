const router = require("express").Router();
const {
  registerUser,
  loginUser,
  userData,
} = require("../../controllers/userControllers");

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/user", userData);

module.exports = router;
