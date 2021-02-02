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
  bathrooms: {
    type: Number,
    //required: [true, 'Number of bedrooms is required']
  },
  m2: {
    type: Number,
    required: [true, 'M2 is required']
  },
  price: {
    type: String,
    required: [true, 'Name is required']
  },
  
  location: String,
  property_id: String,
  description: String
})

const propertyModel = mongoose.model('properties', propertySchema)

module.exports = propertyModel
