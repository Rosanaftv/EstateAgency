const router = require('express').Router()
const { agentSignup, agentLogin, clientSignup, clientLogin } = require('../controllers/auth.controller')

router.post('/clientSignup', clientSignup)
router.post('/clientLogin', clientLogin)
router.post('/agentSignup', agentSignup)
router.post('/agentLogin', agentLogin)

module.exports = router

