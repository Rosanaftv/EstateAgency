const router = require ('express').Router()

const { 
  getAllClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient
} = require ('../controllers/client.controller')

router.get('/', getAllClients)
router.get('/:id', getClientById)
router.post('/', createClient)
router.put('/:id', updateClient)
router.delete('/:id', deleteClient)

module.exports = router
