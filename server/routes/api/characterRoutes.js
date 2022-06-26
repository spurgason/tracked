const router = require("express").Router();
const {
  getCharacter,
  postCharacter,
  putCharacter,
  deleteCharacter,
} = require("../../controllers/characterControllers");

router.route("/").get(getCharacter).post(postCharacter);

router.route("/:id").put(putCharacter).delete(deleteCharacter);

module.exports = router;
