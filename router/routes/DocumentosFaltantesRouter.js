const router = require("express").Router();

const EmpresaControler = require('../../controllers/EmpresaController')

router.post('/', EmpresaControler.create)

module.exports = router