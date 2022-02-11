const DefaultRouter = (modelo, id, nombre, name, fk_emp = name) =>{
    const router = require("express").Router();

    const { validationDefault } = require('../../validations/validationDefault')

    const DefaultController = require("../../controllers/DefaultController");

    const controller = DefaultController.defaultController(modelo, id, nombre, name, fk_emp)


    router.get('/', controller.getAll)

    router.get('/:id', controller.getOne)

    router.get('/default/table-data', controller.getTableData)

    router.post('/', validationDefault, controller.create)

    router.put('/:id', validationDefault, controller.update)

    router.delete('/:id', controller.delete)

    return router
}
module.exports = DefaultRouter