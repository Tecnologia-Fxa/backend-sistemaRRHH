const router = require("express").Router();

const checkLogin = require('../../middlewares/checkTokenLog')


const CredencialesController = require('../../controllers/CredencialController')

router.post('/login', CredencialesController.login)

router.get('/create-credentials', CredencialesController.createCredential)

router.get('/data-top-bar', checkLogin, CredencialesController.InfoTopBar)

module.exports =  router
