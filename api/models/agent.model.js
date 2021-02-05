const mongoose = require('mongoose')
const agentSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Name is required']
  },
  surname: {
    type: String,
    
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },

  password: {
    type: String,
    required: true
  },
  image: String,
  
  telephone: {
    type: Number,
    //required: [true, 'Telephone number is required']
  },
  properties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'properties'
  }],
  description: String,
  image:{
    type: String
    //required: [true, 'Telephone number is required']
  },
})

const agentModel = mongoose.model('agents', agentSchema)

module.exports = agentModel
