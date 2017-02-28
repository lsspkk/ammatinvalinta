var express = require('express');
var router = express.Router();


var fs = require('fs');
var questions = JSON.parse(fs.readFileSync('kysymykset.json', 'utf8'));


/* GET home page. */
router.get('/', function(req, res, next) {
  questions['title'] = 'Kysely';
  res.render('survey', questions);
});

module.exports = router;
