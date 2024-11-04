var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ChatBot' });
});
router.get('/location',function(req,res,next){
  res.render('index',{title:'Location info'});
});
router.get('/location/review',function(req,res,next){
  res.render('index',{title:'Review'});
});
router.get('/about',function(req,res,next){
  res.render('index',{title:'About Us'});
});

module.exports = router;
