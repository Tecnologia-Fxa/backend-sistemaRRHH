
const router = require("express").Router();

const { validationCentroCosto } = require('../../validations/validationsCentroCosto')

const CentroCostoController = require("../../controllers/CentroCostoController");

router.get('/', CentroCostoController.getAll)

router.get('/:id', CentroCostoController.getOne)

router.post('/', validationCentroCosto, CentroCostoController.create)

router.put('/:id', validationCentroCosto, CentroCostoController.update)

router.delete('/:id', CentroCostoController.delete) 

module.exports =  router