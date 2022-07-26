const router = require("express").Router();
const {
  getAssignment,
  postAssignment,
  putAssignment,
  deleteAssignment,
} = require("../../controllers/assignmentControllers");
const { protect } = require("../../middleware/authMiddleware");

router.route("/").get(protect, getAssignment).post(protect, postAssignment);

router
  .route("/:id")
  .put(protect, putAssignment)
  .delete(protect, deleteAssignment);

module.exports = router;
