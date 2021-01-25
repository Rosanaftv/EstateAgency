const mongoose = require('mongoose')
const agentSchema = new mongoose.Schema ({
  
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

const agentModel = mongoose.model('agents', agentSchema)

module.exports = agentModel
