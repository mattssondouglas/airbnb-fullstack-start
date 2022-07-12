// Import Packages
const express = require('express')
const router = express.Router()

//Requests
// POST ROUTE
router.post('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('/auth/login')
  }
})
// Export module
module.exports = router
