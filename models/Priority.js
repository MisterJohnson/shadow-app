var mongoose = require('mongoose');

var PrioritySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  character_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
  metatype: Object,
  attributes: Number,
  skills: Object,
  magic: Object,
  ressources: Number
});

module.exports = mongoose.model('Priority', PrioritySchema);
