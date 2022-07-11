// Import Packages
const express = require('express')
const router = express.Router()

//Requests
router.get('/', async (req, res, next) => {
  res.send('Hello from Reviews')
})
// Export module
module.exports = router
