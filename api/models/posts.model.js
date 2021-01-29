const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  agent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'agents',
    required: [true, 'Post must have a registered agent']
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel
