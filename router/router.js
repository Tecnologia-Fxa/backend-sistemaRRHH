const router = require("express").Router();

router.use('/empresa', require('./routes/EmpresaRouter'))

module.exports = router