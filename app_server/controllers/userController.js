const User = require('../models/user');

// Get a user's profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.render('users/profile', { title: 'User Profile', user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Register a new user
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Login a user
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }
    res.send('Login successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
