var express = require('express');
var router = express.Router();



var points = { questions: [
  { id: "1"  },
  {id: "2" },
  {id: "3" }
]};

function count(body) {
  var result = 0;
  for (var i = 0; i < points['questions'].length; i++) {
    var id = points['questions'][i]['id'];

    var value = body['question'+id];
    if( value != undefined ) {
       value = parseInt(value);
       if( !isNaN(value) )
        result += value;
    }
  }
  return result;
}
/* POST home page. */
router.post('/', function(req, res, next) {
  var user_name=req.body.user;
  var password=req.body.password;
  var result = count(req.body);
  console.log("User name = "+user_name+", password is "+password);
  console.log("score = "+result);
  res.render('evaluate',
  { title: 'Soveltuvuus',
    user: user_name,
    score: result } );
});


module.exports = router;
