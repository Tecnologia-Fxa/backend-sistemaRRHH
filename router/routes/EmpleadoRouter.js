
const router = require("express").Router();

const EmpleadoController = require("../../controllers/EmpleadoController");

const { validationEmpleado } = require('../../validations/validationEmpleado')

router.get('/', EmpleadoController.getAll)

router.get('/:id', EmpleadoController.getOne)

router.post('/', validationEmpleado, EmpleadoController.create)
/* 
router.put('/:id', validationDefault, EmpleadoController.update)
*/
router.put('/inactivar/:id', EmpleadoController.disable) 

router.put('/activar/:id', EmpleadoController.enable) 

module.exports = router
