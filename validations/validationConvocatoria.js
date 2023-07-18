const { validateResult } = require('../helpers/validationHelper')

const { validateParam, validateString, validateLength, validateDate, validateNumber } = require('./validations')

const validationConvocatoria = [
    validateParam('titulo'),
    validateString('titulo'),
    validateLength('titulo', {min:4, max:150}),
    validateParam('descripcion'),
    validateLength('descripcion', {min:4, max:600}),
    validateParam('fecha_publicacion'),
    validateParam('fecha_finalizacion'),
    validateParam('id_centro_costo_fk'),
    validateNumber('id_centro_costo_fk'),
    validateParam('id_ciudad_fk'),
    validateNumber('id_ciudad_fk'),
    (req,res,next)=>validateResult(req,res,next)
]

module.exports = { validationConvocatoria }