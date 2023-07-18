const { Op } = require("sequelize")
const ConvocatoriaModel = require("../Database/Models/ConvocatoriaModel")
const CentroCostoModel = require("../Database/Models/CentroCostoModel")
const CiudadModel = require("../Database/Models/CiudadModel")
const moment = require('moment');
const InscripcionEmpleadoConvocatoriaModel = require("../Database/Models/InscripcionEmpleadoConvocatoriaModel");
const EmpleadoModel = require("../Database/Models/EmpleadoModel");
const CargoModel = require("../Database/Models/CargoModel");

const ConvocatoriaController = {

    //Consulta convocatorias donde la fecha de publicacion y finalización este en un rango adecuado
    getAllConvocatoriasActivas: async(_req,res)=>{
        let today01 = new Date()
        let today = moment.utc(today01).local().format('YYYY-MM-DD HH:mm:ss');
        const convocatoriasActivasResult = await ConvocatoriaModel.findAll({
            where:{
                //? fecha_publicacion <= today
                fecha_publicacion:{
                    [Op.lte]:today
                },
                //? fecha_finalizacion >= today
                fecha_finalizacion:{
                    [Op.gte]:today
                }
            },
            include:[{
                model:CentroCostoModel,
                attributes:["nombre_centro_costo"]
            },{
                model:CiudadModel,
                attributes:["nombre_ciudad"]
            },{
                model:InscripcionEmpleadoConvocatoriaModel,
                as:"inscripcion_empleado_convocatoria",
                attributes:["id_empleado_fk", "id_convocatoria_fk", "src_hoja_de_vida"],
                include:[{
                    model:EmpleadoModel,
                    attributes:["nombres", "apellidos", "numero_identificacion", "celular"],
                    include:[{
                        model:CargoModel,
                        attributes:["nombre_cargo"]
                    }]
                }]
            }]
        })
        res.send(convocatoriasActivasResult)
    },

    //Trae todas aquellas convocatorias que ya se han terminiado
    getAllConvocatoriasInactivasPasadas: async(_req,res)=>{
        let today01 = new Date()
        let today = moment.utc(today01).local().format('YYYY-MM-DD HH:mm:ss');
        const convocatoriasActivasResult = await ConvocatoriaModel.findAll({
            where:{
                //? fecha_finalizacion < today
                fecha_finalizacion:{
                    [Op.lt]:today
                }
            },
            include:[{
                model:CentroCostoModel,
                attributes:["nombre_centro_costo"]
            },{
                model:CiudadModel,
                attributes:["nombre_ciudad"]
            },{
                model:InscripcionEmpleadoConvocatoriaModel,
                as:"inscripcion_empleado_convocatoria",
                attributes:["id_empleado_fk", "id_convocatoria_fk", "src_hoja_de_vida"],
                include:[{
                    model:EmpleadoModel,
                    attributes:["nombres", "apellidos", "numero_identificacion", "celular"],
                    include:[{
                        model:CargoModel,
                        attributes:["nombre_cargo"]
                    }]
                }]
            }]
        })
        res.send(convocatoriasActivasResult)
    },

    //Trae todas aquellas convocatorias que ya estan planeadas
    getAllConvocatoriasInactivasFuturas: async(_req,res)=>{
        let today01 = new Date()
        let today = moment.utc(today01).local().format('YYYY-MM-DD HH:mm:ss');
        const convocatoriasActivasResult = await ConvocatoriaModel.findAll({
            where:{
                //? fecha_publicacion > today
                fecha_publicacion:{
                    [Op.gt]:today
                }
            },
            include:[{
                model:CentroCostoModel,
                attributes:["nombre_centro_costo"]
            },{
                model:CiudadModel,
                attributes:["nombre_ciudad"]
            },{
                model:InscripcionEmpleadoConvocatoriaModel,
                as:"inscripcion_empleado_convocatoria",
                attributes:["id_empleado_fk", "id_convocatoria_fk"]
            }]
        })
        res.send(convocatoriasActivasResult)
    },

    //Crea una nueva convocatoria
    createNewConvocatoria: async(req,res)=>{
        
        const {
            titulo,
            descripcion,
            fecha_publicacion,
            fecha_finalizacion,
            id_centro_costo_fk,
            id_ciudad_fk
        } = req.body
        
        try {
            //Convierte la fecha digitada por el usaurio en una fecha entendible para la bd y no se genere un error en las fechas y los formatos regionales.
            const fechaPublicacionLocal = moment.utc(fecha_publicacion).local().format('YYYY-MM-DD HH:mm:ss');
            const fechaFinalizacionLocal = moment.utc(fecha_finalizacion).local().format('YYYY-MM-DD HH:mm:ss');

            const resultCreate = await ConvocatoriaModel.create({
                titulo,
                descripcion,
                fecha_publicacion: fechaPublicacionLocal,
                fecha_finalizacion: fechaFinalizacionLocal,
                id_centro_costo_fk,
                id_ciudad_fk
            });
            res.status(201).json({message:"Creado con exito", data:resultCreate})
        } catch (error) {
            if(error.errors){
                if(error.errors[0].type==='unique violation')
                    res.json(error.errors[0].message)
            }
            else
                res.json({error:'Error al crear'})
        }

    },

    //Actualiza una convocatoria ya creada, la estructura es similar a la de creacion
    updateConvocatoria: async (req,res)=>{

        const {
            id_convocatoria,
            titulo,
            descripcion,
            fecha_publicacion,
            fecha_finalizacion,
            id_centro_costo_fk,
            id_ciudad_fk
        } = req.body

        try {
            //Convierte la fecha digitada por el usaurio en una fecha entendible para la bd y no se genere un error en las fechas y los formatos regionales.
            const fechaPublicacionLocal = moment.utc(fecha_publicacion).local().format('YYYY-MM-DD HH:mm:ss');
            const fechaFinalizacionLocal = moment.utc(fecha_finalizacion).local().format('YYYY-MM-DD HH:mm:ss');

            const resultCreate = await ConvocatoriaModel.update({
                id_convocatoria,
                titulo,
                descripcion,
                fecha_publicacion: fechaPublicacionLocal,
                fecha_finalizacion: fechaFinalizacionLocal,
                id_centro_costo_fk,
                id_ciudad_fk
            },{
                where:{id_convocatoria}
            });
            res.status(201).json({message:"Actualizado con exito", data:resultCreate})

        } catch (error) {
            if(error.errors){
                if(error.errors[0].type==='unique violation')
                    res.json(error.errors[0].message)
            }
            else{
                console.log(error)
                res.json({error:'Error al actualizar'})
            }
        }

    },

    //Actualiza la fecha de finalización de la convocatoria a la fecha actual
    finalizarConvocatoria: async(req,res)=>{
        const {id_convocatoria} = req.query

        const ahora = new Date()
        let ahoraFormateado = moment.utc(ahora).local().format('YYYY-MM-DD HH:mm:ss');
        
        try {
            await ConvocatoriaModel.update({
                fecha_finalizacion: ahoraFormateado
            },{where:{id_convocatoria}})
            res.json({message:"Convocatoria finalizada"})
        } catch (error) {
            console.log(error)
            res.json({error:'Error al actualizar'})
        }
    }
}

module.exports = ConvocatoriaController