const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema ({
  type: String,
  bedrooms: Number,
  m2: Number,
  price: String,
  agent:{
    name: String,
    surname: String,
    email:{
      type: String,
      validate: { validator(value){
        return (value)
      }
    },
    telephone: Number,
  },
  location: String,
  property_id: String
 }
})

const propertyModel = mongoose.model('Property', propertySchema)

module.exports = propertyModel