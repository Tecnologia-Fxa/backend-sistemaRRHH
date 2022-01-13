const router = require("express").Router();

const EmpresaControler = require('../../controllers/EmpresaController')

router.get('/', EmpresaControler.getAll)

router.get('/:id', EmpresaControler.getOne)

router.post('/', EmpresaControler.create)

router.put('/:id', EmpresaControler.update)

module.exports = router