const router = require("express").Router();

const checkLogin = require('../../middlewares/checkTokenLog')


const CredencialesController = require('../../controllers/CredencialController')

router.post('/login', CredencialesController.login)

router.post('/chage-pass', checkLogin, CredencialesController.changePass)

router.get('/create-credentials', CredencialesController.createCredential)

router.get('/data-top-bar', checkLogin, CredencialesController.InfoTopBar)

router.post('/restore-pass', checkLogin, CredencialesController.restorePass)

module.exports =  router
