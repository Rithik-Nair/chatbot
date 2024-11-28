// routes/help.js
var express = require('express');
var router = express.Router();

// Route for /help
router.get('/help', function(req, res) {
  res.render('help', { title: 'Help' });
});

// Route for /help/faq
router.get('/help/faq', function(req, res) {
  res.render('faq', { title: 'Frequently Asked Questions' });
});

// Route for /contact
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Support' });
});

module.exports = router;
