const router = require("express").Router();

router.use('/empresa', require('./routes/EmpresaRouter'))

router.use('/tipo-identificacion', require('./routes/TipoIdentificacionRouter'))

module.exports = router