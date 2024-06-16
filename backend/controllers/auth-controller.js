// Controller in auth-controller.js

const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')
const User = require('../models/user');

exports.Signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already registered' });
    }

    const saltRounds = 10;                 // Number of salt rounds for bcrypt hashing
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'Successfully registered. Please login now.' });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Error registering user' });
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User is not registered' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign({ userId: user._id },process.env.SECRET_KEY, { expiresIn: '1h' });

      // Store the token in the user schema or wherever needed for password reset

      user.token = token;
      await user.save();

      return res.status(200).json({ message: 'Login successful', token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Error logging in' });
  }
};




