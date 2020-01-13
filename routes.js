var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/story/a_drop_of_sense_in_a_river_of_madness', function(req, res) {
  res.render('a_drop_of_sense_in_a_river_of_madness/first_publish')
});

module.exports = router;
