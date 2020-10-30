const express = require('express');
const passport = require('../config/ppConfig');
const db = require('../models');
const router = express.Router();
const axios = require('axios');

// POST request to get artist name and discogs data to search results
router.post('/', (req, res) => {
  let artist = req.body.search_input;
  axios.get(`https://api.discogs.com/database/search?artist=${artist}&key=${process.env.disKey}&secret=${process.env.disSecret}`).then(function (apiResponse) {
    let discogs = apiResponse.data.results;
    res.render('search-results', { discogs, artist })
  })
})

module.exports = router;