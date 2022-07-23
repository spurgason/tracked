const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema({
  subject: {
    type: String,
    required: [true, "Assignments must have a subject"],
  },
  class: {
    type: String,
    required: [true, "Assignments must have a class"],
  },
  dueDate: {
    type: String,
  },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
