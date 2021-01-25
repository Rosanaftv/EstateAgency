const router = require ('express').Router()

const propertiesRouter = require ('./properties.router')

router.use('/properties', propertiesRouter)

module.exports = router