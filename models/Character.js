var mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  alias: String,
  current_karma: Number,
  spent_karma: Number,
  physical_description: Array,
  background: String,
  picture: Object,
  date_creation: Date,
  date_updated: Date,
  current_essence: Number,

// Object containing the information of the character
  inventory: Object,
  priority: Object,
  attributes: Object,
  skills: Object,
  augmentations: Object,
  magic_resonance: Object,
  socials: Object
});

module.exports = mongoose.model('Character', CharacterSchema);
