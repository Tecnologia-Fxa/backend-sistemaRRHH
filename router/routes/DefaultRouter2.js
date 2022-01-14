const DefaultRouter2 = (modelo, id, monto) =>{
    const router = require("express").Router();

    const { validationDefault2 } = require('../../validations/validationDefault2')

    const DefaultController2 = require("../../controllers/DefaultController2");

    const controller = DefaultController2.defaultController(modelo, id, monto)


    router.get('/', controller.getAll)

    router.get('/:id', controller.getOne)

    router.post('/', validationDefault2, controller.create)

    router.put('/:id', validationDefault2, controller.update)

    router.delete('/:id', controller.delete)

    return router
}
module.exports = DefaultRouter2