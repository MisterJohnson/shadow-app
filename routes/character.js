var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Character = require('../models/Character.js');
var Priority = require('../models/Priority.js');

/* GET ALL CHARACTERS */
router.get('/', function(req, res, next) {
  Character.find().populate('priority').exec(function (err, characters) {
    if (err) return next(err);
    res.json(characters);
  });
});

/* GET SINGLE CHARACTER BY ID */
router.get('/:id', function(req, res, next) {
  Character.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CHARACTER */
router.post('/', function(req, res, next) {
  Character.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CHARACTER */
router.put('/:id', function(req, res, next) {
  Character.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CHARACTER */
router.delete('/:id', function(req, res, next) {
  Character.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
