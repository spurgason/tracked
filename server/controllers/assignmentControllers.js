const asynchandler = require("express-async-handler");

const Assignment = require("../models/assignmentModel");

const getAssignment = asynchandler(async (req, res) => {
  const assignment = await Assignment.find();
  res.status(200).json({ assignment });
});

const postAssignment = asynchandler(async (req, res) => {
  const assignment = await Assignment.create({
    subject: req.body.subject,
    class: req.body.class,
    dueDate: req.body.dueDate,
  });

  res.status(200).json(assignment);
});

const putAssignment = asynchandler(async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  if (!assignment) {
    res.status(400);
    throw new Error("Assignment not found");
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

  await assignment.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAssignment,
  postAssignment,
  putAssignment,
  deleteAssignment,
};
