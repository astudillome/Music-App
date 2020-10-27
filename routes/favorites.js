const express = require('express');
const passport = require('../config/ppConfig');
const db = require('../models');
const router = express.Router();
const axios = require('axios');


//GET /favorites - return a page with favorited albums
router.get('/', (req, res) =>{
    //ToDo: get all records from DB and render to view
    db.favorite.findAll().then(allFavorites => {
        res.render('favorites', {favorites: allFavorites})
    })
})

//POST /favorites - receive album information and add it to the Database
router.post('/', function(req,res) {
    //ToDo: Get form data and add it
    console.log('---------')
    console.log(req.body.artist_id)
    //db.pokemon.findOrCreate(req.body).then(newFavorite => {
        res.redirect('/favorites')
    });

module.exports = router;