// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
const Users = require('../models/users')
const Reviews = require('../models/reviews')

//Requests
router.get('/', async (req, res, next) => {
  res.send('Hello from Reviews')
})
// POST /
router.post('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
    req.body.author = req.user._id
    req.body.house = req.body.house
    let review = await Reviews.create(req.body)
    res.redirect(`/houses/${req.body.house}`)
  } else {
    res.redirect('/auth/login')
  }
})
// Export module
module.exports = router
