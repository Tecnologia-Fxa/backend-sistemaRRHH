const router = require("express").Router();

const CredencialesController = require('../../controllers/CredencialController')

router.post('/login', CredencialesController.login)

router.get('/create-credentials', CredencialesController.createCredential)

module.exports =  router
