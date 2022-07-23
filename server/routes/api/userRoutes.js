const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "User get successful" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "User post successful" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "User put successful" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "User delete successful" });
});

module.exports = router;
