var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String
});

userSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

module.exports = mongoose.model('User', userSchema);
