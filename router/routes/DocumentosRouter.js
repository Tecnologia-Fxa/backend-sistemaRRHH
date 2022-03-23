
const router = require("express").Router();

const DocumentosController = require("../../controllers/DocumentosController");

router.get('/docs-emp/:id', DocumentosController.getUploadFiles)


module.exports =  router