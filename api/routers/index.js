const router = require('express').Router()
const propertiesRouter = require('./properties.router')
const clientsRouter = require('./client.router')
const agentsRouter = require('./agent.router')
const authRouter= require('./auth.router')
const { authAgent } = require('../utils')
const { authClient }= require('../utils')

router.use('/properties', propertiesRouter)
router.use('/clients', clientsRouter)
router.use('/agents', agentsRouter)
router.use('/auth', authRouter)



module.exports = router
