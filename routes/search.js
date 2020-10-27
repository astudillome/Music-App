const express = require('express');
const passport = require('../config/ppConfig');
const db = require('../models');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res) =>{
  
  console.log("////",req.body.search_input)
  res.render('search-results')
})

module.exports = router;