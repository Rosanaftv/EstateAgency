const mongoose = require('mongoose')
const agentSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Name is required']
  },
  surname: {
    type: String,
    required: [true, 'Surname is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  telephone: {
    type: Number,
    required: [true, 'Telephone number is required']
  },
  properties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'properties'
  }]
})

const agentModel = mongoose.model('agents', agentSchema)

module.exports = agentModel
