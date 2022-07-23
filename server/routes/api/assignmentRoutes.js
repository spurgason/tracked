const router = require("express").Router();
const {
  getAssignment,
  postAssignment,
  putAssignment,
  deleteAssignment,
} = require("../../controllers/assignmentControllers");

router.route("/").get(getAssignment).post(postAssignment);

router.route("/:id").put(putAssignment).delete(deleteAssignment);

module.exports = router;
