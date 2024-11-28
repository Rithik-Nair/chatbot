const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

router.get('/review', (req, res) => {
  res.render('review', { title: 'Review' });
});

module.exports = router;
