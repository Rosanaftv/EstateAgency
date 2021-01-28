const clientModel = require('../models/client.model')
//const { handleError } = require('../utils')

function getAllClients (req, res) {
  clientModel
    .find()
    .then(clients => {
      res.status(200).json(clients)
    })
    .catch(err => {
      res.status(500).json({ error: 'clients not found' })
    })

}

function getClientById (req, res) {
  clientModel
    .findById(req.params.id)
    .then(client => {
      res.status(200).json(client)
    })
    .catch(err => {
      res.status(500).json({ error: 'clients not found' })
    }) 
}

function createClient (req, res) {
  clientModel
    .create(req.body)
    .then(clients => {
      res.status(200).json(clients)
    }).catch(err => {
      res.status(500).json({ error: 'client not found' })
    })
}

function updateClient (req, res) {
  clientModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(response => {
      res.status(200).send('Updated')
    })
    .catch(err => {
      res.status(500).json({error: 'Not updated'})
  })
}

function deleteClient (req, res) {
  clientModel
    .findByIdAndDelete (req.params.id, { $set: req.body })
    .then(response => {
      res.status(200).send('client deleted')
    })
    .catch(err => {
      res.status(500).send('client not deleted')
    })
}

module.exports =
{
  getAllClients,
  createClient,
  updateClient,
  getClientById,
  deleteClient
}
