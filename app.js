// Require Packages
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const hbs = require('hbs')
const hbsUtils = require('hbs-utils')(hbs)
const methodOverride = require('method-override')
require('dotenv').config()

// Build the App
const app = express()

// View Engine (Handlebars)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.set('view options', { layout: 'layouts/main' })
hbs.registerPartials(__dirname + '/views/partials', err => {})
hbsUtils.registerWatchedPartials(__dirname + '/views/partials')
require('./hbs-helpers')

// Middleware
app.use(logger('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

// Database
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log('Connected to MongoDB')
  }
)

// Security
require('./express-sessions')(app)

// Routes

// ::::
// Create your routes here
app.use('/', require('./controllers/index.js'))
app.use('/auth', require('./controllers/auth.js'))
app.use('/bookings', require('./controllers/bookings.js'))
app.use('/houses', require('./controllers/houses.js'))
app.use('/profile', require('./controllers/profile.js'))
app.use('/reviews', require('./controllers/reviews.js'))
// ::::

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// Error Handler
app.use((err, req, res, next) => {
  // Only provides full error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.locals.coder = req.coder
  res.locals.hideSearch = true
  // Render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
