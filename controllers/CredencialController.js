const CredencialModel = require('../Database/Models/CredencialModel')

require ('dotenv').config();

const EmpleadoModel = require('../Database/Models/EmpleadoModel')

const TipoUsuarioModel = require('../Database/Models/TipoUsuarioModel')

const { validationResult } = require('express-validator')

const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt = require('jwt-simple')


const CredencialController = {

    //!TEMPORAL 
    createCredential:async(req,res)=>{

        const empleados = await EmpleadoModel.findAll({attributes:['id_empleado', 'numero_identificacion'],order:['id_empleado']})
        empleados.forEach(async(el) => {
            let contra = bcrypt.hashSync(el.numero_identificacion, 10)
            await CredencialModel.create({
                nombre_usuario:el.numero_identificacion,
                contraseña: contra,
                usuario_fk: el.id_empleado
            }).catch(err=>{
                res.json({texto:'error al crear en:'+ el.id_empleado, err})
            })
            console.log('si en '+ el.id_empleado)
        });
    },

    login: async(req,res)=>{
        const {
            nombre_usuario,
            contraseña
        } = req.body

        const userValidation = await CredencialModel.findOne({where:{nombre_usuario}})
        
        if(userValidation){
            const passwordValidation = await bcrypt.compareSync(contraseña, userValidation.contraseña)
            if(passwordValidation){
                const empleado = await EmpleadoModel.findByPk(userValidation.usuario_fk, {attributes:['id_empleado','nombres', 'estado'], include:{model:TipoUsuarioModel, attributes:['nombre_tipo_usuario']}})
                if(empleado.estado){
                    res.json({tokenlog:createTokenLog(empleado)})
                }else{
                    res.json('no logueao // inactivo')
                }
            }else{
                res.json('no logueao')
            }
        }else{
            res.json('no logueao')
        }

    },

    
}

const createTokenLog = (empleado) =>{
    const payload = {
        idEmpleado: empleado.id_empleado,
        nombreEmpleado: empleado.nombres,
        tipoUsuario: empleado.tipo_usuario.nombre_tipo_usuario,
        createAt: moment().unix(),
        expiredAt: moment().add(90,'minutes').unix()
    }        

    return jwt.encode(payload, process.env.PASSDECODE);
}


module.exports = CredencialController