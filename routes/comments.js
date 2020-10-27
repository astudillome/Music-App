const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', function(req, res) {
  console.log('working');
  res.send('you are here')
})

// POST /comments - create a new comment
router.post('/', function (req, res) {
  console.log("///anything")
  console.log(req.body)
  db.comment.create(req.body)
  
    .then(function (comment) {
      res.redirect(`/album-details/${req.body.masterId}`)
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).render('main/404')
    })
})

module.exports = router