var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/story/alpha', function(req, res) {
  res.render('alpha/draft')
});

module.exports = router;
