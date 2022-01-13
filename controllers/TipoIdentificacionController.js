const TipoIdentificacionModel = require('../Database/Models/TipoIdentificacionModel')
const { validationResult } = require('express-validator')

const TipoIdentificacionController = {

    getAll:async(_req, res)=>{
        const items = await TipoIdentificacionModel.findAll()
        res.json(items)
    },

   getOne: async(req,res)=>{
        const item = await TipoIdentificacionModel.findByPk(req.params.id)
        res.json(item)
    },

    create: async(req,res)=>{
        const {nombre} = req.body
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors:errors.array() })
        }
        await TipoIdentificacionModel.create({
            nombre_tipo_identificacion: nombre
        }).then(()=>{
            res.json("Creado con exito")
        }).catch(()=>{
            res.json('Error al crear')
        })
    },

    update: async(req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors:errors.array() })
        }

        const {nombre} = req.body
        await TipoIdentificacionModel.update({
            nombre_tipo_identificacion: nombre
        },{
            where:{ id_tipo_identificacion:req.params.id}
        }).catch(()=>{
            res.json('Error al actualizar')
        })
        res.json("Actualizado con exito")
    },

    delete: async(req,res)=>{
        await TipoIdentificacionModel.destroy({
            where:{id_tipo_identificacion:req.params.id}
        }).catch(err=>{
            res.json({err:"Error al borrar el producto"});
        });
        res.json("Borrado con exito")
    }
 
}

module.exports = TipoIdentificacionController