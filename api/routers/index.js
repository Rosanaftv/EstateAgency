const router = require('express').Router()
const propertiesRouter = require('./properties.router')
const clientsRouter = require('./client.router')
const agentsRouter = require('./agent.router')

router.use('/properties', propertiesRouter)
router.use('/clients', clientsRouter)
router.use('/agents', agentsRouter)

module.exports = router
