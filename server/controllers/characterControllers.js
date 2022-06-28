const asynchandler = require("express-async-handler");

const Character = require("../models/characterModel");

const getCharacter = asynchandler(async (req, res) => {
  const character = await Character.find();
  res.status(200).json({ character });
});

const postCharacter = asynchandler(async (req, res) => {
  const character = await Character.create({
    charName: req.body.charName,
    class: req.body.class,
    level: req.body.level,
    race: req.body.race,
    background: req.body.background,
    alignment: req.body.alignment,
    experiencePoints: req.body.experiencePoints,
  });

  res.status(200).json(character);
});

const putCharacter = asynchandler(async (req, res) => {
  const character = await Character.findById(req.params.id);
  if (!character) {
    res.status(400);
    throw new Error("Character not found");
  }

  const updatedCharacter = await Character.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedCharacter);
});

const deleteCharacter = asynchandler(async (req, res) => {
  const character = await Character.findById(req.params.id);

  if (!character) {
    res.status(400);
    throw new Error("Character not found");
  }

  await character.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCharacter,
  postCharacter,
  putCharacter,
  deleteCharacter,
};
