const DocumentosFaltantesModel = require('../Database/Models/DocumentosFaltantesModel')
const sequelize = require('../Database/configBD')

const EmpresaControler = {

    create: async(req,res)=>{
        const {id_empleado_fk,id_tipo_documento_fk} = req.body
        await DocumentosFaltantesModel.create({id_empleado_fk,id_tipo_documento_fk})
    }

}

module.exports = EmpresaControler