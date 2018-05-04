var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Articles = require('../models/Article.js');

module.exports = router;

/* GET all Articles */
router.get('/', function(req, res, next) {
  Articles.find(function (err, articles) {
    if (err) return next(err);
    res.json(articles);
  });
});

/* GET single Article by ID */
router.get('/:id', function(req, res, next) {
  Articles.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
