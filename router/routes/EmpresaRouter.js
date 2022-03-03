const router = require("express").Router();

const { validationEmpresa} = require('../../validations/validationsEmpresa')

const EmpresaController = require('../../controllers/EmpresaController')

router.get('/', EmpresaController.getAll)

router.get('/table-data', EmpresaController.getTableData)

router.get('/:id', EmpresaController.getOne)

router.post('/', validationEmpresa, EmpresaController.create)

router.put('/:id', validationEmpresa, EmpresaController.update)

router.delete('/:id', EmpresaController.delete)


module.exports = router