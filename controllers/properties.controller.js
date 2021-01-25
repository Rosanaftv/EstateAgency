const propertiesModel = require('../models/properties.model')

function getAllProperties(req, res) {
  propertiesModel
    .find()
    .then(users => {
      res.status(200).send(users)
    })
    .catch(err => {
      res.status(500).send('users not found')
    })

}

module.exports = { getAllProperties }