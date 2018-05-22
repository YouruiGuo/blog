var express = require('express');
var router = express.Router();
var Article = require('../models/article.js');

/* GET article listing. */
router.get('/', function(req, res, next) {
  Article.find(function (err, article) {
    if (err) return next(err);
    res.json(article);
  });
});

router.post('/', function(req, res, next) {
  Article.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
