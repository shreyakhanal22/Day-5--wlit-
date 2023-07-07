var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', num:20 });
});
router.get('/wlit', function(req, res, next) {
  res.render('index', {title:'WLiT', num:10 });
});
// passing number 10 as title 
module.exports = router;
