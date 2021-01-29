const router = require ('express').Router()


const {
  authClient
} = require('../utils')

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
router.put('/:id/', authClient, updateClient)
router.delete('/:id', deleteClient)

module.exports = router
