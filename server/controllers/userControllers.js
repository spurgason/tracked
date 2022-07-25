const registerUser = (req, res) => {
  res.json({ message: "User register" });
};

const loginUser = (req, res) => {
  res.json({ message: "User login" });
};

const userData = (req, res) => {
  res.json({ message: "User Data" });
};

module.exports = {
  registerUser,
  loginUser,
  userData,
};
