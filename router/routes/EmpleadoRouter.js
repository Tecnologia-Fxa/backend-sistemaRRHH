
const router = require("express").Router();

const EmpleadoController = require("../../controllers/EmpleadoController");

const { validationEmpleado } = require('../../validations/validationEmpleado')

router.get('/', EmpleadoController.getAll)

router.get('/permisos', EmpleadoController.getAllRoles)

router.put('/cambio-rol/:id', EmpleadoController.changeRol)

router.get('/inactivos', EmpleadoController.getAllInactives)

router.get('/nuevos-empleados', EmpleadoController.listNuevosEmpleados)

router.get('/datos-cartas', EmpleadoController.listDataCard)

router.get('/porcentaje-empleados', EmpleadoController.dataEmpleadosEmpresa)

router.get('/:id', EmpleadoController.getOne)

router.get('/info-perfil/:id', EmpleadoController.getInfoPerfil)

router.get('/info-perfil/:id', EmpleadoController.getInfoPerfil)

router.get('/default/certificado-lab', EmpleadoController.getInfoCertiLab)

router.post('/generar-reporte', EmpleadoController.genReporte)

router.put('/:id', validationEmpleado, EmpleadoController.update)

router.put('/inactivar/:id', EmpleadoController.disable) 

router.put('/activar/:id', EmpleadoController.enable) 


module.exports = router
