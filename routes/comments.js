const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', function(req, res) {
  console.log('working')
  res.send('you are here')
})
// GET route to get comments
// router.get('/:id', function(req,res) {
//   axios.get(`https://api.discogs.com/masters/${req.params.id}`).then(function(apiResponse) {
//       let albumDetails = apiResponse.data
//       db.favorite.findAll({
//         where: { masterId: req.params.id },
//         // include: comment
//       }).then(function (comments){
//         console.log(comments);
//         res.render('album-details', {albumDetails, comments})
//       })
//       })
// })

// POST /comments - create a new comment
router.post('/', function (req, res) {
  console.log("///anything")
  // console.log(req.body)
  db.comment.create(req.body).then(function (comment) {
      res.redirect(`/album-details/${req.body.id}`)
    })
    .catch(function (error) {
      console.log(error)
      res.status(400).render('main/404')
    })
})

module.exports = router