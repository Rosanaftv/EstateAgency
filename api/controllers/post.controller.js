const postModel = require('../models/posts.model')

module.exports =
{
 createPost
}

function createPost (req, res) {
  postModel
    .create({
      title: req.body.title,
      content: req.body.content,
      agent_id: res.locals.agent._id
    })
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json('Post not found')
    })

}