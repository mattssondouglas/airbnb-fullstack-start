// Import Packages
const express = require('express')
const router = express.Router()

//Requests
// GET /
router.get('/', async (req, res, next) => {
  res.render('./profile')
})
// PATCH /
router.patch('/', async (req, res, next) => {})
// Export module
module.exports = router
