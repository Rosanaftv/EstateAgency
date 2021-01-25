const router = require ('express').Router()

const { getAllAgents } = require ('../controllers/agent.controller')

router.get('/', getAllAgents)
router.get('/:id', function() { })
router.post('/', function () { })
router.put ('/:id', function() { })
router.delete ('/:id', function () { })

module.exports = router