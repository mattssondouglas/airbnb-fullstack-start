const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('reviews', {
  author: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  date: {
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
    ref: 'houses',
    required: true
  }
  // COMMENTING OUT RATING FOR NOW, COME BACK LATER. PORTAL 2/2 5.MODELS
  // rating: {
  //   type: Number,
  // },
})
