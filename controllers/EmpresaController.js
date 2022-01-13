const EmpresaModel = require('../Database/Models/EmpresaModel')
const { validationResult } = require('express-validator')

const EmpresaControler = {

    getAll:async(_req, res)=>{
        const empresas = await EmpresaModel.findAll()
        res.json(empresas)
    },

    getOne: async(req,res)=>{
        const empresa = await EmpresaModel.findByPk(req.params.id)
        res.json(empresa)
    },

    create: async(req,res)=>{
        const {nombre, nit} = req.body
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors:errors.array() })
        }
        await EmpresaModel.create({
            nombre_empresa: nombre,
            nit: nit
        }).catch(()=>{
            res.json('Error al crear')
        })/* 
        res.json("Creado con exito") */
    },

    update: async(req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors:errors.array() })
        }

        const {nombre, nit} = req.body
        await EmpresaModel.update({
            nombre_empresa: nombre,
            nit:nit
        },{
            where:{ id_empresa:req.params.id}
        }).catch(()=>{
            res.json('Error al actualizar')
        })
        res.json("Actualizado con exito")
    },

    delete: async(req,res)=>{
        await EmpresaModel.destroy(req.params.id)
        res.json("Borrado con exito")
    }

}

module.exports = EmpresaControler