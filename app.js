var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://simonlepage:Jackpot50@shadowrun-shard-00-00-g1ocb.mongodb.net:27017,shadowrun-shard-00-01-g1ocb.mongodb.net:27017,shadowrun-shard-00-02-g1ocb.mongodb.net:27017/sr5?ssl=true&replicaSet=shadowrun-shard-0&authSource=admin',
  { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var character = require('./routes/character');
var article = require('./routes/article');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/characters', express.static(path.join(__dirname, 'dist')));
app.use('/*', express.static(path.join(__dirname, 'dist')));
app.use('/character', character);
app.use('/article', article);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
