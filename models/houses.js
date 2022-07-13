const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('houses', {
  description: {
    type: String,
    required: true
  },
  host: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  photos: [String],
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
