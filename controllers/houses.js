// Import Packages
const express = require('express')
const router = express.Router()

//Requests
// GET /
router.get('/', async (req, res, next) => {
  res.render('./houses/list')
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
    res.render('./houses/create')
  } else {
    res.redirect('/auth/login')
  }
})
// GET /:id
router.get('/:id', async (req, res, next) => {
  res.render('./houses/one')
})
// GET /:id/edit
router.get('/:id/edit', async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('./houses/edit')
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
