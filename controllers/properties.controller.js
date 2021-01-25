const propertyModel = require('../models/properties.model')

function getAllProperties(req, res) {
  propertyModel
    .find()
    .then(properties => {
      res.status(200).json(properties)
    })
    .catch(err => {
      res.status(500).json({ error: 'properties not found' })
    })

}
function createProperty(req, res) {
  propertyModel
    .create(req.body)
    .then(response => {
      res.status(200).json(response)
    }).catch(err => {
      res.status(500).json({ error: 'properties not found' })
    })
}

function updateProperty (req, res){
  propertyModel
  .findByIdAndUpdate (req.params.id, req.body)
  .then(response => {
      res.status(200).send('Updated')
  })
  .catch(err => {
      res.status(500).json({error: 'Not updated'})
  })
}

function deleteProperty (req, res){
  propertyModel
  .findByIdAndDelete (req.params.id, {$set: req.body})
  .then(response => {
      res.status(200).send('Property deleted')
  })
  .catch(err => {
      res.status(500).send('Property not deleted')
  })
}


module.exports = { getAllProperties, createProperty, updateProperty, deleteProperty }