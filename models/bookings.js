const mongoose = require('mongoose')

module.exports = mongoose.model('bookings', {
  author: {
    type: ObjectId,
    res: 'users',
    required: true
  },
  name: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  house: {
    type: ObjectId,
    res: 'houses',
    required: true
  }
})
