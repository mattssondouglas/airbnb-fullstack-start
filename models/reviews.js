const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('reviews', {
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
  // COMMENTING OUT RATING FOR NOW, COME BACK LATER. PORTAL 2/2 5.MODELS
  // rating: {
  //   type: Number,
  // },
})
