const agentModel = require('../models/agent.model')

function getAllAgents(req, res) {
  agentModel
    .find()
    .then(agents => {
      res.status(200).send(agents)
    })
    .catch(err => {
      res.status(500).send('agents not found')
    })

}

module.exports = {getAllagents}