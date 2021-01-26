const mongoose = require('mongoose')
const clientSchema = new mongoose.Schema ({
  
    name: {
      type: String,
      required: [true, 'Name is required']
      },
    surname: {
      type: String,
      required: [true, 'Surname is required']
      },
    email:{
      type: String,
      required: [true, 'Email is required']
      },
    telephone: {
      type: Number,
      required: [true, 'Telephone number is required']
      },
})

const clientModel = mongoose.model('clients', clientSchema)

module.exports = clientModel