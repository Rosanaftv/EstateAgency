const router = require('express').Router()
const propertiesRouter = require('./properties.router')
const clientsRouter = require('./client.router')
const agentsRouter = require('./agent.router')
const postsRouter = require('./posts.router')
const authRouter= require('./auth.router')


router.use('/properties', propertiesRouter)
router.use('/clients', clientsRouter)
router.use('/agents', agentsRouter)
router.use('/auth', authRouter)
router.use('/posts', postsRouter)



module.exports = router
