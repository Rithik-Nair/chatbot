const express = require('express');
const router = express.Router();

// Render chat page
router.get('/', (req, res) => {
  res.render('chat/index', { title: 'Chat Room' });
});

module.exports = router;
