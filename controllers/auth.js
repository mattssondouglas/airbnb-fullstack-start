// Import Packages
const express = require('express')
const router = express.Router()

//Requests
//BASE ROUTE
router.get('/', async (req, res, next) => {
  res.send('Hello from Auth')
})
// LOGIN GET
router.get('/login', async (req, res, next) => {
  res.render('login')
})
// LOGIN POST
router.post('/login', async (req, res, next) => {})
// SIGNUP GET
router.get('/signup', async (req, res, next) => {
  res.render('signup')
})
// SIGNUP POST
router.post('/signup', async (req, res, next) => {})
// LOGOUT GET
router.get('/logout', async (req, res, next) => {})
// Export module
module.exports = router
