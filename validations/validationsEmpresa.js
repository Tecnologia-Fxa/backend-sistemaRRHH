const { validateResult } = require('../helpers/validationHelper')

const { validateParam, validateString, validateLength } = require('./validations')

const validationEmpresa = [
    validateParam('nombre'),
    validateString('nombre'),
    validateLength('nombre', {min:4, max:50}),
    validateParam('nit'),
    validateLength('nit', {min:6, max:15}),
    (req,res,next)=>validateResult(req,res,next)
]

module.exports = { validationEmpresa }