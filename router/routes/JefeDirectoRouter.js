const router = require("express").Router();

const JefeDirectoController = require('../../controllers/JefeDirectoController')

router.get('/table-data', JefeDirectoController.getTableData)

router.get('/empleados', JefeDirectoController.getEmp)

router.post('/new-jefe', JefeDirectoController.create)

router.post('/delete-jefe', JefeDirectoController.delete)

module.exports = router