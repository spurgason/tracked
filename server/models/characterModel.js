const mongoose = require("mongoose");

const characterSchema = mongoose.Schema({
  charName: {
    type: String,
    required: [true, "Please give your character a name"],
  },
  class: {
    type: String,
    required: [true, "Please give your character a class"],
  },
  level: {
    type: Number,
    required: [true, "Please give your character a level"],
  },
  race: {
    type: String,
    required: [true, "Please give your character a race"],
  },
  background: {
    type: String,
  },
  alignment: {
    type: String,
  },
  experiencePoints: {
    type: String,
  },
});

module.exports = mongoose.model("Character", characterSchema);
