// Import Packages
const express = require('express')
const router = express.Router()

//Requests
// GET /
router.get('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('./profile')
  } else {
    res.redirect('/auth/login')
  }
})
// PATCH /
router.patch('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('/auth/login')
  }
})
// Export module
module.exports = router
