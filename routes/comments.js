const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', function(req, res) {
  console.log('working');
  res.send('you are here')
})
//GET /comments 
router.get('/', (req, res) => {
  //ToDo: get all records from DB and render to view
  db.comment.findAll().then(allComments => {
    res.render('album-details', { comments: allComments })
  })
})
// POST /comments - create a new comment
router.post('/', function (req, res) {
  console.log("///anything")
  console.log(req.body)
  db.comment.create(req.body).then(function (comment) {
      res.redirect(`/album-details/${req.body.album_titleId}`)
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).render('main/404')
    })
})

module.exports = router