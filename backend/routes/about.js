var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const person={title:'About', admin:true};
  res.render('about', { person });
});

module.exports = router;