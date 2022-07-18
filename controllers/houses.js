// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
const Bookings = require('../models/bookings')
const Users = require('../models/users')
const Reviews = require('../models/reviews')

//Requests
// GET /
router.get('/', async (req, res, next) => {
  // EMPTY QUERY  TO MODIFY
  let q = {}
  // LOCATION FILTER
  if (req.query.location && req.query.location != '') {
    q.location = req.query.location
  }
  // ROOM FILTER
  if (req.query.rooms && req.query.rooms != '') {
    q.rooms = req.query.rooms
  }
  // PRICE FILTER
  if (req.query.price && req.query.price != '') {
    q.price = {
      $lt: req.query.price
    }
  }
  console.log(q)
  // TITLE FILTER
  console.log('title', req.query.title)
  if (req.query.title && req.query.title != '') {
    q.title = { $regex: req.query.title, $options: 'i' }
  }
  // SORTING SOLUTION STARTING WITH EMPTY ARRAY
  let houses = []
  if (req.query.psort != 0) {
    houses = await Houses.find(q).sort('-price')
  } else {
    houses = await Houses.find(q).sort('price')
  }
  // FINAL RENDER
  res.render('./houses/list', { user: req.user, houses })
})
// POST /
router.post('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      req.body.photos = req.body.photos.filter(photo => photo != '')
      req.body.host = req.user._id
      let house = await Houses.create(req.body)
      res.redirect(`/houses/${house._id}`)
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
// GET /create
router.get('/create', async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('./houses/create', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})
// GET /:id
router.get('/:id', async (req, res, next) => {
  let house = await Houses.findById(req.params.id).populate('host')
  let reviews = await Reviews.find({
    house: house
  })
  let booking = await Bookings.findOne({
    house: req.params.id,
    author: req.user._id
  })
  if (booking) {
    res.render('houses/one', { user: req.user, house, booking, reviews })
  } else {
    res.render('houses/one', { user: req.user, house, reviews })
  }
})
// GET /:id/edit
router.get('/:id/edit', async (req, res, next) => {
  if (req.isAuthenticated()) {
    let house = await Houses.findById(req.params.id)
    res.render('./houses/edit', { user: req.user, house })
  } else {
    res.redirect('/auth/login')
  }
})
// PATCH /:id
router.patch('/:id', async (req, res, next) => {
  if (req.isAuthenticated()) {
    let house = await Houses.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/houses/${req.params.id}`)
  } else {
    res.redirect('/auth/login')
  }
})
// DELETE /:id
router.delete('/:id', async (req, res, next) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('/auth/login')
  }
})
// Export module
module.exports = router
