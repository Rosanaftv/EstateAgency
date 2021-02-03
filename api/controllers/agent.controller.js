const agentModel = require('../models/agent.model')


function getAllAgents (req, res) {
  agentModel
    .find()
    .then(agents => {
      res.status(200).json(agents)
    })
    .catch(err => {
      res.status(500).json({ error: 'Agents not found' })
    })

}


function getAgentProperties(req, res) {
  agentModel
  .findById(res.locals.agent._id)
  .populate("properties")
  .then(agent => {
    res.status(200).json(agent)
  })
  .catch(err => {
    res.status(500).send('Agent property not found')
  })
}

function createAgent (req, res) {
  agentModel
    .create(req.body)
    .then(agents => {
      res.status(200).json(agents)
    }).catch(err => {
      res.status(500).json({ error: 'Agent not found' })
    })
}

function getAgentById (req, res) {
  agentModel
    .findById(res.locals.agent._id)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({ error: 'Agents not found' })
    })
}


function updateAgent (req, res) {
  agentModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(response => {
      res.status(200).send('Updated')
    })
    .catch(err => {
      res.status(500).json({ error: 'Not updated' })
    })
}

function deleteAgent (req, res) {
  agentModel
    .findByIdAndDelete(res.locals.agent._id, { $set: req.body })
    .then(response => { 
      agent.save(err =>res.status(200).send('agent deleted'))})
    .catch(err => {
      res.status(500).json(err)
    })
}

function deleteAgentProperty(req, res){
  agentModel
  .findById(res.locals.agent._id)
  .then(agent => {
    agent.properties.remove(req.params.propertyId)
    agent.save(err => res.send('deleted') )
    
  })
    .catch(err => res.status(500).json(err)
  )

}


module.exports =
{
  getAllAgents,
  getAgentProperties,
  deleteAgentProperty,
  createAgent,
  updateAgent,
  getAgentById,
  deleteAgent
}
