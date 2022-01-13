const router = require("express").Router();
const TipoIdentificacionController = require("../../controllers/TipoIdentificacionController");

router.get('/', TipoIdentificacionController.getAll)

router.get('/:id', TipoIdentificacionController.getOne)

router.post('/', TipoIdentificacionController.create)

router.put('/:id', TipoIdentificacionController.update)

router.delete('/:id', TipoIdentificacionController.delete)

module.exports = router