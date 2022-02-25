const router = require("express").Router();

const DocumentosFaltantesController = require('../../controllers/DocumentosFaltantesController')

router.post('/', DocumentosFaltantesController.create)

router.get('/:id', DocumentosFaltantesController.getByIdEmp)

router.post('/delete-doc', DocumentosFaltantesController.deleteDoc)

module.exports = router