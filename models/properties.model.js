const mongoose = require('mongoose')
const propertySchema = new mongoose.Schema ({
  type: String,
  bedrooms: Number,
  m2: Number,
  price: String,
  agent: Object,// no puedo poner ObjectId,
  location: String,
  property_id: String
 })


const propertyModel = mongoose.model('properties', propertySchema)

module.exports = propertyModel
