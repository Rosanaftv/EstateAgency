const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./api/routers')
const app = express()

mongoose.connect('mongodb://localhost/estateAgency',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to Mongo!', err);
  })


app.use(cors())
app.use(express.json())
app.use('/api', router)
app.listen(3000, (err) => {
  console.info('\n\n' + '>'.repeat(40))
  console.info(`💻  Rosana Server Live`);
  console.info(`📡  PORT: http://localhost: 3000`);
  console.info(">".repeat(40) + "\n\n");
})
