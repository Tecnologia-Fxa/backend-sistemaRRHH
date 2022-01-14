const defaultController=( model, id_def, monto_def)=>{

    model = require(`../Database/Models/${model}`)
    const { validationResult } = require('express-validator')

    const Controller = {

        getAll:async(_req, res)=>{
            const items = await model.findAll()
            res.json(items)
        },

    getOne: async(req,res)=>{
            const item = await model.findByPk(req.params.id)
            res.json(item)
        },

        create: async(req,res)=>{
            const {monto} = req.body
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({ errors:errors.array() })
            }
            await model.create({
                [monto_def]: monto
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

            const {monto} = req.body
            await model.update({
                [monto_def]: monto
            },{
                where:{ [id_def]:req.params.id}
            }).catch(()=>{
                res.json('Error al actualizar')
            })
            res.json("Actualizado con exito")
        },

        delete: async(req,res)=>{
            await model.destroy({
                where:{ [id_def]:req.params.id}
            }).catch(err=>{
                res.json({err:"Error al borrar el producto"});
            });
            res.json("Borrado con exito")
        }
    
    }
    return Controller 

    
}
module.exports = { defaultController }
