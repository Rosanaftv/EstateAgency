const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Property = require('./models/properties.model')
const router = require('./routers/routers.js')
const app = express()

mongoose.connect('mongodb+srv://estateAgency:fuerteventura@cluster0.advr4.mongodb.net/EstateAgency',

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },

  function (error) {
    if (error) {
      console.error(error)
    } else {
      console.log('Connected!')

    }
  })




  app.use(cors())
  app.use('/api', router)
  app.listen(3000, (err) => {
  console.info('\n\n' + '>'.repeat(40))
  console.info(`💻  Rosana Server Live`);
  console.info(`📡  PORT: http://localhost: 3000`);
  console.info(">".repeat(40) + "\n\n");
})





