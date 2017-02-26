var express = require('express');
var router = express.Router();



var questions = { questions: [
  { id: "1", text: "Työskentelen mielelläni ulkona?" },
  {id: "2", text: "Työskentelen mielelläni sisällä?"},
  {id: "3", text: "Työskentelen mielelläni pakkasella?"},
]};


/* GET home page. */
router.get('/', function(req, res, next) {
  questions['title'] = 'Kysely';
  res.render('survey', questions);
});

module.exports = router;
