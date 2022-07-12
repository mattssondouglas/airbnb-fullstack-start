// Import Packages
const express = require('express')
const router = express.Router()

//Requests
// GET /
router.get('/', async (req, res, next) => {
  res.render('./houses/list', { user: req.user })
  // user=req.user
})
// POST /
router.post('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('/auth/login')
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
  res.render('./houses/one', { user: req.user })
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
