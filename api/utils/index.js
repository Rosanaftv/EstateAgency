const jwt = require('jsonwebtoken')
const agentModel = require('../models/agent.model')
const clientModel = require('../models/client.model')

// Authenticate Middleware
function authAgent (req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }

      agentModel
        .findOne({ email: token.email })
        .then(agent => {
          res.locals.agent = agent
          next()
        })
        .catch(err => res.json(err))
    })
  }
}

function authClient (req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }

      clientModel
        .findOne({ email: token.email })
        .then(client => {
          res.locals.client = client
          next()
        })
        .catch(err => res.json(err))
    })
  }
}

// Return HTTP error with details in JSON
function handleError (err, res) {
  return res.status(400).json(err)
}

module.exports = {
  authAgent,
  authClient,
  handleError
}
