// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')

//Requests
// GET /
router.get('/', async (req, res, next) => {
  res.render('./houses/list', { user: req.user })
  // user=req.user
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
  console.log(house)
  res.render('houses/one', { user: req.user, house })
})
// GET /:id/edit
router.get('/:id/edit', async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('./houses/edit', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})
// PATCH /:id
router.patch('/:id', async (req, res, next) => {
  if (req.isAuthenticated()) {
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
