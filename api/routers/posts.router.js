const router = require('express').Router()
const { authAgent } = require('../utils')

const {
 createPost,
 getPosts
} = require('../controllers/post.controller')

router.post('/', authAgent, createPost)
router.get('/', authAgent, getPosts)


module.exports = router