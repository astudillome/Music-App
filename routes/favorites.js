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
    console.log(req.user)
    db.favorite.findOrCreate({
        where:{
            artist: req.body.artist_name,
            album_title: req.body.album_title,
            //how do we get userid for user that's logged in
            userId: req.user.id,
            masterId: req.body.master_id,
        }
}).then(function(fave) {
    console.log('Created: ', fave.album_title)
    res.redirect('/favorites')
})
});

module.exports = router;