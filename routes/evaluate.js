var express = require('express');
var router = express.Router();


// jonkinlaiset taulukot eri ammattialojen pisteistä
var fs = require('fs');
var questions = JSON.parse(fs.readFileSync('kysymykset.json', 'utf8'));

/**
 * Käydään joka kysymys läpi ja kootaan tulokset
 * kutsumalla eri alat laskevaa funktiota
 */
function count(body) {
  var result = [
    { 'name': 'Humanistinen ja kasvatusala','score' : 0},
    { 'name': 'Kulttuuriala','score' : 0},
    { 'name': 'Yhteiskuntatieteiden, liiketalouden ja hallinnon ala','score' : 0},
    { 'name': 'Luonnontieteiden ala','score' : 0},
    { 'name': 'Tekniikan ja liikenteen ala','score' : 0},
    { 'name': 'Luonnonvara- ja ympäristöala','score' : 0},
    { 'name': 'Sosiaali-, terveys- ja liikunta-ala','score' : 0},
    { 'name': 'Matkailu-, ravitsemis- ja talousala ','score' : 0}
  ];
  for (var i = 1; i < 21; i++) {
        var value = body['question'+i];
    if( value != undefined ) {
       value = parseInt(value);
       if( !isNaN(value) )
        count_different_areas(result, questions['questions'][i-1], value);
    }
  }
  return result;
}

/**
 * Lasketaan yhden kysymyksen vaikutus eri ammattialoille.
 * value on 1, 2, 3, tai 4 eli survey.hbs-tiedostossa määritelty
 * question sisältää arviointitiedot,katso tiedosto kysmykset.json
 */
function count_different_areas(result, question, value) {
  if( value > 4 || value < 1 )
    return;

  result[0]['score'] = parseInt(result[0]['score']) + question['scores_huma'][value-1];
  result[1]['score'] = parseInt(result[1]['score']) + question['scores_kult'][value-1];
  result[2]['score'] = parseInt(result[2]['score']) + question['scores_yhte'][value-1];
  result[3]['score'] = parseInt(result[3]['score']) + question['scores_luon'][value-1];
  result[4]['score'] = parseInt(result[4]['score']) + question['scores_tekn'][value-1];
  //console.log("vastaus:"+value+"tekniset pisteet" +  result[4]['score']);
  result[5]['score'] = parseInt(result[5]['score']) + question['scores_ympa'][value-1];
  result[6]['score'] = parseInt(result[6]['score']) + question['scores_sosi'][value-1];
  result[7]['score'] = parseInt(result[7]['score']) + question['scores_matk'][value-1];
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
    results: result } );
});


module.exports = router;
