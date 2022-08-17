const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    assignment: {
      type: String,
      // required: [true, "Assignments must have a subject"],
    },
    className: {
      type: String,
      // required: [true, "Assignments must have a class"],
    },
    dueDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Assignment", assignmentSchema);
