const req = require("express/lib/request")
const DocumentoModel = require("../Database/Models/DocumentoModel")


const DocumentosControler = {


    getUploadFiles:async(req,res)=>{
        const documentos = DocumentoModel.findAll({where:{empleado_fk:req.params.id}})
        res.json(documentos)
    }

}

module.exports = DocumentosControler