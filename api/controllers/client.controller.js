const clientModel = require('../../models/client.model')

function getAllClients(req, res) {
  clientModel
    .find()
    .then(clients => {
      res.status(200).send(clients)
    })
    .catch(err => {
      res.status(500).send('clients not found')
    })

}

module.exports = {getAllClients}