const express = require('express');
const passport = require('../config/ppConfig');
const db = require('../models');
const router = express.Router();
const axios = require('axios');

// router.get('/', (req, res) => {
//   res.render('auth/signup');
// });

router.get('/', (req, res))