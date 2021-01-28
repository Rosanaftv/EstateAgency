const agentModel = require('../models/agent.model')
const clientModel= require('../models/client.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function signUp (req, res) {
  const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
  agentModel
    .create({
      name: req.body.name,
      email: req.body.email,
      password: encryptedPasswd
    })
    .then(agent=> {
      const data = { email: agent.email, name: agent.name }
      const token = jwt.sign(data, process.env.SECRET)
      res.status(200).json({ token: token, ...data })
    })
    .catch(err => res.status(500).json(err))
}

function login (req, res) {
  agentModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (!agent) {
        res.send('Agent not found')
        return
      } else {
        const result = bcrypt.compareSync(req.body.password, user.password)
        if (result) {
          const data = { email: agent.email, name: agent.name }
          const token = jwt.sign(data, process.env.SECRET)
          res.status(200).json({ token: token, ...data })
          res.send('Passwords do not match yo')
        }
      }
    })
}


function signUp (req, res) {
  const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
  clientModel
    .create({
      name: req.body.name,
      email: req.body.email,
      password: encryptedPasswd
    })
    .then(client=> {
      const data = { email: client.email, name: client.name }
      const token = jwt.sign(data, process.env.SECRET)
      res.status(200).json({ token: token, ...data })
    })
    .catch(err => res.status(500).json(err))
}

function login (req, res) {
  clientModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (!agent) {
        res.send('Agent not found')
        return
      } else {
        const result = bcrypt.compareSync(req.body.password, user.password)
        if (result) {
          const data = { email: client.email, name: client.name }
          const token = jwt.sign(data, process.env.SECRET)
          res.status(200).json({ token: token, ...data })
          res.send('Passwords do not match yo') 
        }
      }
    })
}

module.exports = {
  signUp,
  login
}
