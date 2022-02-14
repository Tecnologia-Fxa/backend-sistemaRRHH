const DefaultRouter3 = (modelo, id, talla, name) =>{
    const router = require("express").Router();

    const { validationDefault3 } = require('../../validations/validationDefault3')

    const DefaultController3 = require("../../controllers/DefaultController3");

    const controller = DefaultController3.defaultController(modelo, id, talla, name)


    router.get('/', controller.getAll)

    router.get('/default/table-data', controller.getTableData)

    router.get('/:id', controller.getOne)

    router.post('/', validationDefault3, controller.create)

    router.put('/:id', validationDefault3, controller.update)

    router.delete('/:id', controller.delete)

    return router
}
module.exports = DefaultRouter3