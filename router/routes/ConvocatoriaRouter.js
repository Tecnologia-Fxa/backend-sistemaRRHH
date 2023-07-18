const ConvocatoriaController = require("../../controllers/ConvocatoriaController");
const { checkRolAdmin } = require("../../middlewares/checkRol");
const { validationConvocatoria } = require("../../validations/validationConvocatoria");

const router = require("express").Router();

router.get('/get-activas', ConvocatoriaController.getAllConvocatoriasActivas)

router.get('/get-inactivas-pasadas', checkRolAdmin, ConvocatoriaController.getAllConvocatoriasInactivasPasadas)

router.get('/get-inactivas-futuras', checkRolAdmin, ConvocatoriaController.getAllConvocatoriasInactivasFuturas)

router.post('/create', checkRolAdmin, validationConvocatoria, ConvocatoriaController.createNewConvocatoria)

router.put('/update', checkRolAdmin, validationConvocatoria, ConvocatoriaController.updateConvocatoria)

router.put('/finalizar-convocatoria', checkRolAdmin, ConvocatoriaController.finalizarConvocatoria)

module.exports =  router