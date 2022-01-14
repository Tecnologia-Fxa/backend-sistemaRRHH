const EmpleadoModel = require('../Database/Models/EmpleadoModel')

const TipoIdentificacionModel = require('../Database/Models/TipoIdentificacionModel')
const CiudadModel = require('../Database/Models/CiudadModel')
const NacionalidadModel = require('../Database/Models/NacionalidadModel')
const EstadoCivilModel = require('../Database/Models/EstadoCivilModel')
const CentroCostoModel = require('../Database/Models/CentroCostoModel')
const CargoModel = require('../Database/Models/CargoModel')
const TipoContratoModel = require('../Database/Models/TipoContratoModel')
const TiempoModel = require('../Database/Models/TiempoModel')
const EstadoContratoModel = require('../Database/Models/EstadoContratoModel')
const SalarioModel = require('../Database/Models/SalarioModel')
const AuxMovilidadModel = require('../Database/Models/AuxMovilidadModel')
const EstudiosRealizadosModel = require('../Database/Models/EstudiosRealizadosModel')
const BancoModel = require('../Database/Models/BancoModel')
const TipoCuentaModel = require('../Database/Models/TipoCuentaModel')
const EpsModel = require('../Database/Models/EpsModel')
const ArlModel = require('../Database/Models/ArlModel')
const PensionModel = require('../Database/Models/PensionModel')
const CesantiasModel = require('../Database/Models/CesantiasModel')
const CajaCompensacionModel = require('../Database/Models/CajaCompensacionModel')
const TallaCamisaModel = require('../Database/Models/TallaCamisaModel')
const TallaPantalonModel = require('../Database/Models/TallaPantalonModel')
const TallaCalzadoModel = require('../Database/Models/TallaCalzadoModel')
const TipoUsuarioModel = require('../Database/Models/TipoUsuarioModel')

const { validationResult } = require('express-validator')

const Controller = {

    getAll:async(_req, res)=>{
        const items = await EmpleadoModel.findAll({
            include:[
                { model: TipoIdentificacionModel, attributes:['nombre_tipo_identificacion']},
                { model: CiudadModel, as:'lugar_nacimiento', attributes:['nombre_ciudad']},
                { model: CiudadModel, as:'lugar_exp_doc', attributes:['nombre_ciudad']},
                { model: NacionalidadModel, attributes:['nombre_nacionalidad']},
                { model: EstadoCivilModel, attributes:['nombre_estado_civil']},
                { model: CentroCostoModel, attributes:['nombre_centro_costo']},
                { model: CiudadModel, as:'lugar_trabajo', attributes:['nombre_ciudad']},
                { model: CargoModel, attributes:['nombre_cargo']},
                { model: TipoContratoModel, attributes:['nombre_tipo_contrato']},
                { model: TiempoModel, attributes:['nombre_tiempo']},
                { model: EmpleadoModel, as:'jefe_zona', attributes:['nombres','apellidos']},
                { model: EstadoContratoModel, attributes:['nombre_estado_contrato']},
                { model: SalarioModel, attributes:['monto_salario']},
                { model: AuxMovilidadModel, attributes:['monto_aux_movilidad']},
                { model: EstudiosRealizadosModel, attributes:['nombre_estudios']},
                { model: BancoModel, attributes:['nombre_banco']},
                { model: TipoCuentaModel, attributes:['nombre_tipo_cuenta']},
                { model: EpsModel, attributes:['nombre_eps']},
                { model: ArlModel, attributes:['nombre_arl']},
                { model: PensionModel, attributes:['nombre_pension']},
                { model: CesantiasModel, attributes:['nombre_cesantias']},
                { model: CajaCompensacionModel, attributes:['nombre_caja_comp']},
                { model: TallaCamisaModel, attributes:['nombre_talla_camisa']},
                { model: TallaPantalonModel, attributes:['nombre_talla_pantalon']},
                { model: TallaCalzadoModel, attributes:['nombre_talla_calzado']},
                { model: TipoUsuarioModel, attributes:['nombre_tipo_usuario']}
            ],
            attributes:['id_empleado','estado','numero_identificacion','nombres','apellidos','genero','fecha_nacimiento','fecha_expedicion_doc','fecha_ingreso','correo_electronico','direccion','telefono_fijo','celular','num_cuenta','riesgo','contacto_emergencia','tel_contacto_emergencia','src_fotografia',]
        })
        res.json(items)
    },

    getOne: async(req,res)=>{
        const item = await EmpleadoModel.findByPk(req.params.id,{
            include:[
                { model: TipoIdentificacionModel, attributes:['nombre_tipo_identificacion']},
                { model: CiudadModel, as:'lugar_nacimiento', attributes:['nombre_ciudad']},
                { model: CiudadModel, as:'lugar_exp_doc', attributes:['nombre_ciudad']},
                { model: NacionalidadModel, attributes:['nombre_nacionalidad']},
                { model: EstadoCivilModel, attributes:['nombre_estado_civil']},
                { model: CentroCostoModel, attributes:['nombre_centro_costo']},
                { model: CiudadModel, as:'lugar_trabajo', attributes:['nombre_ciudad']},
                { model: CargoModel, attributes:['nombre_cargo']},
                { model: TipoContratoModel, attributes:['nombre_tipo_contrato']},
                { model: TiempoModel, attributes:['nombre_tiempo']},
                { model: EmpleadoModel, as:'jefe_zona', attributes:['nombres','apellidos']},
                { model: EstadoContratoModel, attributes:['nombre_estado_contrato']},
                { model: SalarioModel, attributes:['monto_salario']},
                { model: AuxMovilidadModel, attributes:['monto_aux_movilidad']},
                { model: EstudiosRealizadosModel, attributes:['nombre_estudios']},
                { model: BancoModel, attributes:['nombre_banco']},
                { model: TipoCuentaModel, attributes:['nombre_tipo_cuenta']},
                { model: EpsModel, attributes:['nombre_eps']},
                { model: ArlModel, attributes:['nombre_arl']},
                { model: PensionModel, attributes:['nombre_pension']},
                { model: CesantiasModel, attributes:['nombre_cesantias']},
                { model: CajaCompensacionModel, attributes:['nombre_caja_comp']},
                { model: TallaCamisaModel, attributes:['nombre_talla_camisa']},
                { model: TallaPantalonModel, attributes:['nombre_talla_pantalon']},
                { model: TallaCalzadoModel, attributes:['nombre_talla_calzado']},
                { model: TipoUsuarioModel, attributes:['nombre_tipo_usuario']}
            ],
            attributes:['id_empleado','estado','numero_identificacion','nombres','apellidos','genero','fecha_nacimiento','fecha_expedicion_doc','fecha_ingreso','correo_electronico','direccion','telefono_fijo','celular','num_cuenta','riesgo','contacto_emergencia','tel_contacto_emergencia','src_fotografia',]
        })
        res.json(item)
    },

    create: async(req,res)=>{
        const {
            id_tipo_identificacion_fk,
            numero_identificacion,
            nombres,
            apellidos,
            genero,
            fecha_nacimiento,
            lugar_nacimiento_fk,
            fecha_expedicion_doc,
            nacionalidad_fk,
            estado_civil_fk,
            centro_costo_fk,
            lugar_trabajo_fk,
            cargo_fk,
            tipo_contrato_fk,
            tipo_tiempo_fk,
            fecha_ingreso,
            jefe_zona_fk,
            estado_contrato_fk,
            salario_fk,
            aux_movilidad_fk,
            correo_electronico,
            direccion,
            telefono_fijo,
            celular,
            estudios_fk,
            banco_fk,
            tipo_cuenta_fk,
            num_cuenta,
            eps_fk,
            arl_fk,
            riesgo,
            pension_fk,
            cesantias_fk,
            ccf_fk,
            contacto_emergencia,
            tel_contacto_emergencia,
            talla_camisa_fk,
            talla_pantalon_fk,
            talla_calzado_fk,
            id_empresa_fk,
            src_fotografia,
        } = req.body

        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
            return res.status(400).json({ errors:errors.array() })
        }
        
        await EmpleadoModel.create({
            id_tipo_identificacion_fk,
            numero_identificacion,
            nombres,
            apellidos,
            genero,
            fecha_nacimiento,
            lugar_nacimiento_fk,
            fecha_expedicion_doc,
            nacionalidad_fk,
            estado_civil_fk,
            centro_costo_fk,
            lugar_trabajo_fk,
            cargo_fk,
            tipo_contrato_fk,
            tipo_tiempo_fk,
            fecha_ingreso,
            jefe_zona_fk,
            estado_contrato_fk,
            salario_fk,
            aux_movilidad_fk,
            correo_electronico,
            direccion,
            telefono_fijo,
            celular,
            estudios_fk,
            banco_fk,
            tipo_cuenta_fk,
            num_cuenta,
            eps_fk,
            arl_fk,
            riesgo,
            pension_fk,
            cesantias_fk,
            ccf_fk,
            contacto_emergencia,
            tel_contacto_emergencia,
            talla_camisa_fk,
            talla_pantalon_fk,
            talla_calzado_fk,
            id_empresa_fk,
            src_fotografia,
        }).then(()=>{
            res.json("Creado con exito")
        }).catch(()=>{
            res.json('Error al crear')
        })
    },

    disable: async(req, res)=>{
        await EmpleadoModel.update({
            estado: 0
        },{
            where:{ id_empleado:req.params.id}
        }).catch(()=>{
            res.json('Error al inactivar')
        })
        res.json("Inactivado con exito")
    },

    enable: async(req, res)=>{
        await EmpleadoModel.update({
            estado: 1
        },{
            where:{ id_empleado:req.params.id}
        }).catch(()=>{
            res.json('Error al activar')
        })
        res.json("Activado con exito")
    },
    
}
module.exports = Controller 
