var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('library');
});

router.get('/story', function(req, res) {
  res.render('library');
});

router.get('/story/1', function(req, res) {
  res.render('story/issue1')
});

router.get('/story/2', function(req, res) {
  res.render('story/issue2')
});

module.exports = router;
