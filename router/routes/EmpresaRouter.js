const router = require("express").Router();

const { validationEmpresa} = require('../../validations/validationsEmpresa')

const EmpresaControler = require('../../controllers/EmpresaController')

router.get('/', EmpresaControler.getAll)

router.get('/table-data', EmpresaControler.getTableData)

router.get('/:id', EmpresaControler.getOne)

router.post('/', validationEmpresa, EmpresaControler.create)

router.put('/:id', validationEmpresa, EmpresaControler.update)

router.delete('/:id', EmpresaControler.delete)


module.exports = router