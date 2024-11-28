const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User profile route
router.get('/:id', userController.getUserProfile);

// Register new user route
router.post('/register', userController.registerUser);

// Login route
router.post('/login', userController.loginUser);

module.exports = router;
