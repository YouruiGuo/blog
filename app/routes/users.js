var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
const { wrap: async } = require('co');

/* GET users listing. */
router.get('/',function(req, res, next) {
  res.render('user', { title: 'Express' });
})

router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
