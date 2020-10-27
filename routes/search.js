const express = require('express');
const passport = require('../config/ppConfig');
const db = require('../models');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res) =>{
  console.log("////",req.body.search_input)  
  axios.get(`https://api.discogs.com/database/search?artist=${req.body.search_input}&key=${process.env.disKey}&secret=${process.env.disSecret}`).then(function(apiResponse) {
        var discogs = apiResponse.data.results;
        res.render('search-results', {discogs})
        })
})

module.exports = router;