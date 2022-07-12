// Import Packages
const express = require('express')
const router = express.Router()

//Requests
router.get('/', async (req, res, next) => {
  res.send('Hello from Reviews')
})
// POST /
router.post('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('/auth/login')
  }
})
// Export module
module.exports = router
