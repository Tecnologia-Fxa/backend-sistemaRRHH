
const router = require("express").Router();

const EmpleadoController = require("../../controllers/EmpleadoController");

const { validationEmpleado } = require('../../validations/validationEmpleado')

router.get('/', EmpleadoController.getAll)

router.get('/nuevos-empleados', EmpleadoController.listNuevosEmpleados)

router.get('/datos-cartas', EmpleadoController.listDataCard)

router.get('/porcentaje-empleados', EmpleadoController.dataEmpleadosEmpresa)

router.get('/:id', EmpleadoController.getOne)

router.post('/', validationEmpleado, EmpleadoController.create)

router.put('/:id', validationEmpleado, EmpleadoController.update)

router.put('/inactivar/:id', EmpleadoController.disable) 

router.put('/activar/:id', EmpleadoController.enable) 


module.exports = router
