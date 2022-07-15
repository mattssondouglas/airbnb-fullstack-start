// Import Packages
const express = require('express')
const router = express.Router()
const Bookings = require('../models/bookings')

//Requests
// POST ROUTE
router.post('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
    let booking = await Bookings.create({
      author: req.user._id,
      description: req.body.description,
      house: req.body.house
    })
    res.redirect(`/houses/${req.body.house}`)
  } else {
    res.redirect('/auth/login')
  }
})
// Export module
module.exports = router
