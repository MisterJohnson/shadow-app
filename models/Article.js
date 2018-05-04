var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  assets: String,
  description: String,
  date: Date,
  metadata: Array
}, {
  collection: 'articles'
});

module.exports = mongoose.model('Article', ArticleSchema);
