const router = require ('express').Router()

const { getAllClients } = require ('../controllers/client.controller')

router.get('/', getAllClients)
router.get('/:id', function() { })
router.post('/', function () { })
router.put ('/:id', function() { })
router.delete ('/:id', function () { })

module.exports = router