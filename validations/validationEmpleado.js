const { validateResult } = require('../helpers/validationHelper')

const { validateParam, validateString, validateLength } = require('./validations')

const validationEmpleado = [
    validateParam('nombres'),
    validateString('nombres'),
    validateLength('nombres', {min:3, max:30}),
    (req,res,next)=>validateResult(req,res,next)
]

module.exports = { validationEmpleado }