const router = require('express').Router()
const { authAgent } = require('../utils')

const {
 createPost
} = require('../controllers/post.controller')

router.post('/', authAgent, createPost)


module.exports = router