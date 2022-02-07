const CentroCostoModel = require('../Database/Models/CentroCostoModel')
const CiudadModel = require('../Database/Models/CiudadModel')
const { validationResult } = require('express-validator')
const EmpleadoModel = require('../Database/Models/EmpleadoModel')
const { sequelize } = require('../Database/Models/CentroCostoModel')

const CentroCostoControler = {

    getAll:async(_req, res)=>{
        const centrosCosto = await CentroCostoModel.findAll({
            /* include:{
                model:CiudadModel,
                attributes:['nombre_ciudad']
            }, */
            attributes:['id_centro_costo', 'nombre_centro_costo']
        })
        res.json(centrosCosto)
    },

    tableGetAll:async(req,res)=>{
        const centrosCosto = await  sequelize.query('SELECT id_centro_costo, nombre_centro_costo, id_ciudad_fk, nombre_ciudad, COUNT(id_empleado)empleados FROM centro_costo LEFT OUTER JOIN ciudad AS ciudad ON id_ciudad_fk = id_ciudad INNER JOIN empleado ON centro_costo_fk = id_centro_costo GROUP BY nombre_centro_costo')
        res.json(centrosCosto[0])
    },

    getOne: async(req,res)=>{
        const centroCosto = await CentroCostoModel.findByPk(req.params.id,{
            include:{
                model:CiudadModel,
                attributes:['nombre_ciudad']
            },
            attributes:['id_centro_costo', 'nombre_centro_costo']
        })
        res.json(centroCosto)
    },

    create: async(req,res)=>{
        const {nombre_centro_costo, id_ciudad_fk} = req.body
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors:errors.array() })
        }
        await CentroCostoModel.create({
            nombre_centro_costo: nombre_centro_costo,
            id_ciudad_fk
        }).then(()=>{
            res.json('Creado con exito')
        }).catch(()=>{
            res.json('Error al crear')
        })
    },

    update: async(req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors:errors.array() })
        }

        const {nombre_centro_costo, id_ciudad_fk} = req.body
        await CentroCostoModel.update({
            nombre_centro_costo: nombre_centro_costo,
            id_ciudad_fk
        },{
            where:{ id_centro_costo:req.params.id}
        }).catch(()=>{
            res.json('Error al actualizar')
        })
        res.json("Actualizado con exito")
    },

    delete: async(req,res)=>{
        await CentroCostoModel.destroy({
            where:{id_centro_costo:req.params.id}
        }).catch(err=>{
            res.json({err:"Error al borrar el producto"});
        });
        res.json("Borrado con exito")
    }

}

module.exports = CentroCostoControler