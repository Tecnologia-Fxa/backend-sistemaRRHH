const { Op, where } = require("sequelize")
const CentroCostoModel = require("../Database/Models/CentroCostoModel")
const CiudadModel = require("../Database/Models/CiudadModel")
const ConvocatoriaModel = require("../Database/Models/ConvocatoriaModel")
const InscripcionEmpleadoConvocatoriaModel = require("../Database/Models/InscripcionEmpleadoConvocatoriaModel")
const moment = require('moment');
const sequelize = require("../Database/configBD")

const InscripcionConvocatoriaController = {


      getConvocatoriasSinInscripcionEmpleado: async (req, res) => {
        let today01 = new Date()
        let today = moment.utc(today01).local().format('YYYY-MM-DD HH:mm:ss');
        const convocatoriasDisponibles = await ConvocatoriaModel.findAll({
          where: [sequelize.literal(`
            NOT EXISTS (
              SELECT 1
              FROM inscripcion_empleado_convocatoria
              WHERE convocatoria.id_convocatoria = inscripcion_empleado_convocatoria.id_convocatoria_fk
              AND inscripcion_empleado_convocatoria.id_empleado_fk = ${req.idEmpleado}
            )
          `),
            //? fecha_publicacion <= today
            {fecha_publicacion:{
                [Op.lte]:today
            },
            //? fecha_finalizacion >= today
            fecha_finalizacion:{
                [Op.gte]:today
            }}],
          include:[{
            model:CentroCostoModel,
            attributes:["nombre_centro_costo"]
            },{
                model:CiudadModel,
                attributes:["nombre_ciudad"]
            }],
        });
      
        res.json(convocatoriasDisponibles);
      },

    getConvocatoriasInscritoActivas: async(req,res)=>{
        const {id_empleado_fk} = req.query

        try {
            let today01 = new Date()
            let today = moment.utc(today01).local().format('YYYY-MM-DD HH:mm:ss');

            const convocatoriasInscritas = await InscripcionEmpleadoConvocatoriaModel.findAll({
                where:{id_empleado_fk:(id_empleado_fk)?id_empleado_fk:req.idEmpleado},
                include:[
                    {
                        model:ConvocatoriaModel,
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
                        }]
                    }
                ]
            })

            res.json(convocatoriasInscritas)

        } catch (error) {
            console.log(error)
            res.json("Error a la hora de listar").status(500)
        }

    },

    getConvocatoriasInscritoInactivas: async(req,res)=>{
        const {id_empleado_fk} = req.query

        try {
            let today01 = new Date()
            let today = moment.utc(today01).local().format('YYYY-MM-DD HH:mm:ss');

            const convocatoriasInscritas = await InscripcionEmpleadoConvocatoriaModel.findAll({
                where:{id_empleado_fk:(id_empleado_fk)?id_empleado_fk:req.idEmpleado},
                include:[
                    {
                        model:ConvocatoriaModel,
                        where:{
                            //? fecha_finalizacion <= today
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
                        }]
                    }
                ]
            })

            res.json(convocatoriasInscritas)

        } catch (error) {
            console.log(error)
            res.json("Error a la hora de listar").status(500)
        }

    },

    inscripcionAConvocatoria: async(req,res)=>{

        let today01 = new Date()
        let today = moment.utc(today01).local().format('YYYY-MM-DD HH:mm:ss');

        const {
            id_convocatoria_fk
        } = req.body

        try {
            const resultadoCreate = await InscripcionEmpleadoConvocatoriaModel.create({
                id_empleado_fk: req.idEmpleado,
                id_convocatoria_fk,
                fecha_inscripcion: today,
                src_hoja_de_vida: req.file.filename
            })
            
            res.status(201).json({resultadoCreate,message:"Inscripcion Realizada!"})

        } catch (error) {
            console.log(error)
            res.status(500).json("Error a la hora de inscribirse")
        }

    },

    deleteInscripcionConvocatoria: async(req,res)=>{
        const { 
            id_empleado_fk,
            id_convocatoria_fk 
        } = req.query

        try {
            
            const resultDelete = await InscripcionEmpleadoConvocatoriaModel.destroy({where:{id_empleado_fk,id_convocatoria_fk}})
            
            res.json({resultDelete, message:"Se a eliminado su inscripcion a esta convocatoria"})

        } catch (error) {
            console.log(error)
            res.json("Error al momento de eliminar la convocatoria")
        }

    }


}

module.exports = InscripcionConvocatoriaController