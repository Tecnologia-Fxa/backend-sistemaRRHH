const EmpleadoModel = require("../Database/Models/EmpleadoModel")

const fs = require('fs').promises

const UploadFileControler = {

    uploadPerfilImage:async(req, res)=>{
        if(!req.file)
            res.json('Error al subir la imagen')
        else{
            EmpleadoModel.findByPk(req.idEmpleado,{attributes:['src_fotografia']}).then(data=>{
                console.log(`./images/PerfilImages/${data.src_fotografia}`)
                fs.unlink(`./images/PerfilImages/${data.src_fotografia}`, err=>{
                    if(err)
                        console.log(err)
                })
                EmpleadoModel.update({src_fotografia:req.file.filename}, {where:{id_empleado:req.idEmpleado}}) 
                res.status(201).json('Actualizado con exito')
            })
            
            
        }
    }

}

module.exports = UploadFileControler