// Import Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

//Requests
//BASE ROUTE
router.get('/', async (req, res, next) => {
  res.send('Hello from Auth', { user: req.user })
})
// LOGIN GET
router.get('/login', async (req, res, next) => {
  res.render('login', { user: req.user })
})
// LOGIN POST
router.post('/login', async (req, res, next) => {
  try {
    let foundUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })

    if (foundUser) {
      req.login(foundUser, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/houses')
        }
      })
    } else {
      throw new Error('User or password does not exist')
    }
  } catch (err) {
    next(err)
  }
})
// SIGNUP GET
router.get('/signup', async (req, res, next) => {
  res.render('signup', { user: req.user })
})
// SIGNUP POST
router.post('/signup', async (req, res, next) => {
  try {
    console.log(req.body)
    let user = await Users.create(req.body)
    let foundUser = await Users.findOne({
      email: req.body.email
    })
    if (foundUser) {
      throw new Error('User with this email already exists')
    }
    req.login(user, err => {
      if (err) {
        console.log(err)
        throw err
      } else {
        // console.log('OK!!!')
        res.redirect('/houses')
      }
    })
    // ENCRYPT PASSWORD IN THIS POST ROUTE LATER
  } catch (err) {
    next(err)
  }
})
// LOGOUT GET
router.get('/logout', async (req, res, next) => {
  req.logout()
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.clearCookie('connect.sid')
    res.redirect('/auth/login')
  })
})
// Export module
module.exports = router
