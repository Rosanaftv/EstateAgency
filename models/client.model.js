const mongoose = require('mongoose')
const clientSchema = new mongoose.Schema ({
  
    name: String,
    surname: String,
    email:{
      type: String,
      validate: { validator(value){
        return (value)
      }
    },
  },
    telephone: Number
})

const clientModel = mongoose.model('clients', clientSchema)

module.exports = clientModel