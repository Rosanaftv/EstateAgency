const router = require ('express').Router()

const {
  getAllProperties, 
  createProperties,
  getPropertiesById, 
  updateProperties, 
  deleteProperties,
  
  
 
} = require ('../controllers/properties.controller')

router.get('/', getAllProperties)
router.get('/:id', function() { })
router.post('/', function () { })
router.put ('/', function() { })
router.delete ('/', function () { })

module.exports = router