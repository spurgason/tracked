const asynchandler = require("express-async-handler");

const Assignment = require("../models/assignmentModel");
const User = require("../models/userModel");

const getAssignment = asynchandler(async (req, res) => {
  const assignment = await Assignment.find({ user: req.user.id });
  res.status(200).json({ assignment });
});

const postAssignment = asynchandler(async (req, res) => {
  const assignment = await Assignment.create({
    assignment: req.body.assignment,
    className: req.body.className,
    dueDate: req.body.dueDate,
    user: req.user.id,
  });

  res.status(200).json(assignment);
});

const putAssignment = asynchandler(async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  if (!assignment) {
    res.status(400);
    throw new Error("Assignment not found");
  }

  // Checks user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Logged in user is assignments user
  if (assignment.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedAssignment = await Assignment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedAssignment);
});

const deleteAssignment = asynchandler(async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);

  if (!assignment) {
    res.status(400);
    throw new Error("Assignment not found");
  }

  // Checks user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Logged in user is assignments user
  if (assignment.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await assignment.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAssignment,
  postAssignment,
  putAssignment,
  deleteAssignment,
};
