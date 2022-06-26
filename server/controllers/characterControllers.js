const getCharacter = (req, res) => {
  res.status(200).json({ message: "GET character success" });
};
const postCharacter = (req, res) => {
  res.status(200).json({ message: "POST character success" });
};
const putCharacter = (req, res) => {
  res.status(200).json({ message: "PUT character success" });
};
const deleteCharacter = (req, res) => {
  res.status(200).json({ message: "DELETE character success" });
};

module.exports = {
  getCharacter,
  postCharacter,
  putCharacter,
  deleteCharacter,
};
