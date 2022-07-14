// Import Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

//Requests
// GET /
router.get('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render('./profile', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})
// PATCH /
router.patch('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      let user = await Users.findByIdAndUpdate(req.user._id, req.body, {
        new: true
      })
      req.login(user, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/profile')
        }
      })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
// Export module
module.exports = router
