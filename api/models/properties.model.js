const mongoose = require('mongoose')
const propertySchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'Type is required']
    }, 
  bedrooms: {
    type: Number,
    required: [true, 'Number of bedrooms is required']
    },
  m2: {
    type: String,
    required: [true, 'M2 is required']
    },
  price: {
    type: String,
    required: [true, 'Name is required']
    },
  agent: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'agent',
    required: [true, 'Agent is required']
    
  }],
  location: String,
  property_id: String
})


const propertyModel = mongoose.model('properties', propertySchema)

module.exports = propertyModel
