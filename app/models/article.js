var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: String,
  published: Boolean
});

module.exports = mongoose.model('Article', ArticleSchema);
