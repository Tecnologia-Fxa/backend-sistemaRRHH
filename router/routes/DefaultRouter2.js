const { validationDefault2 } = require("../../validations/validationDefault2");

const DefaultRouter2 = (modelo, id, talla, name) =>{
    const router = require("express").Router();

    const DefaultController2 = require("../../controllers/DefaultController2");

    const controller = DefaultController2.defaultController(modelo, id, talla, name)


    router.get('/', controller.getAll)

    router.get('/:id', controller.getOne)

    router.get('/default/table-data', controller.getTableData)

    router.post('/', validationDefault2, controller.create)

    router.put('/:id', validationDefault2, controller.update)

    router.delete('/:id', controller.delete)

    return router
}
module.exports = DefaultRouter2