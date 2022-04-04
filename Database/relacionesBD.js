/*Este archivo contiene las relaciones de las tablas, todo esto para obtener la infornmación de una manera mas optima*/

//Primero importamos todas las tablas, para poder hacer uso de estas mas adelante en el codigo

//Estas tablas estan creadas en la ruta de Database/Models/"Nombre BD"
const CiudadModel = require('./Models/CiudadModel');
const CredencialModel = require('./Models/CredencialModel');
const DocumentoModel = require('./Models/DocumentoModel');
const EmpleadoModel = require('./Models/EmpleadoModel');
const TipoDocumentoModel = require('./Models/TipoDocumentoModel');
const TipoidentificacionModel = require('./Models/TipoIdentificacionModel');
const TipoUsuarioModel = require('./Models/TipoUsuarioModel');
const CentroCostoModel = require('./Models/CentroCostoModel');
const TallaCalzadoModel = require('./Models/TallaCalzadoModel');
const TallaPantalonModel = require('./Models/TallaPantalonModel');
const EstadoCivilModel = require('./Models/EstadoCivilModel');
const CargoModel = require('./Models/CargoModel');
const CajaCompensacionModel = require('./Models/CajaCompensacionModel');
const CesantiasModel = require('./Models/CesantiasModel');
const PensionModel = require('./Models/PensionModel');
const ArlModel = require('./Models/ArlModel');
const BancoModel = require('./Models/BancoModel');
const TipoCuentaModel = require('./Models/TipoCuentaModel');
const EpsModel = require('./Models/EpsModel');
const EstudiosRealizadosModel = require('./Models/EstudiosRealizadosModel');
const TipoContratoModel = require('./Models/TipoContratoModel');
const TallaCamisaModel = require('./Models/TallaCamisaModel');
const NacionalidadModel = require('./Models/NacionalidadModel');
const TiempoModel = require('./Models/TiempoModel');
const EstadoContratoModel = require('./Models/EstadoContratoModel');
const SalarioModel = require('./Models/SalarioModel');
const EmpresaModel = require('./Models/EmpresaModel');
const AuxMovilidadModel = require('./Models/AuxMovilidadModel');
const DocumentosFaltantesModel = require('./Models/DocumentosFaltantesModel');


//!-------------------------------------------------------------------------------------------------

//Relaciones 1 a 1
//?1 a 1 significa que un registro esta estrictamente relacionado con solo 1 registro de otra tabla
//*Ejemplo: 1 conductor solo tiene asignado 1 bus, 1 empleado solo tiene asignado un equipo de computo

//relacion empleado y credencial
//*Un empleado tiene unicamente asignada una credencial de acceso al sistema
//Le asignamos la relacion de empleado a credencial
EmpleadoModel.hasOne(CredencialModel, { foreignKey: 'usuario_fk' });
//Le asignamos la relación de credencial a empleado, indicamos que la llave foranea de la relación está en la tabla credencial y se llama usuario_fk
CredencialModel.belongsTo(EmpleadoModel, { foreignKey: 'usuario_fk' })

//!-------------------------------------------------------------------------------------------------

//Relaciones 1 a M 
//?1 a M significa que un registro puede tener asociados 1 o mas registros de otra tabla
//*Ejemplo: 1 maestro tiene muchos alumnos, pero 1 alumno solo tiene un maestro; 1 camarero atiende muchos comensales, pero 1 comensal solo es atendido por 1 camarero

//Relacion tipo_usuario y empleado (foranea en empleado)
//*1 tipo de usuario(Rol) tiene asociados muchos empleados, pero 1 empleado solo puede tener un tipo de usuario(Rol)
//Creamos la relación en el modelo TipoUsuarioModel donde le damos un alias a la relación 
TipoUsuarioModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_usuario_fk' });
//Creamos la relación en la tabla de empleado estableciendo como se llamara la foranea de la relación tipo_usuario_fk
EmpleadoModel.belongsTo(TipoUsuarioModel, { foreignKey:'tipo_usuario_fk' })

//Relacion tipo_identificacion y empleado (foranea en empleado)
//*1 tipo de identificación tiene muchos empleados, pero 1 empleado solo puede poseer un tipo de identificación
//Creamos la relación en tipo identificación asignando un alias para la obtencion de la información
TipoidentificacionModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_identificacion_fk' });
//Creamos la relación en empleado asignando la llave foranea que se va a usar para obtener la respectiva información
EmpleadoModel.belongsTo(TipoidentificacionModel, { foreignKey:'tipo_identificacion_fk' })

//Relacion centro_costo y empleado (foranea en empleado)
//*1 centro de costo puede tener muchos empleados, pero 1 empleado solo pertenece a 1 centro de costo
CentroCostoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'centro_costo_fk' });
EmpleadoModel.belongsTo(CentroCostoModel, { foreignKey:'centro_costo_fk' })

//Relacion talla_calzado y empleado (foranea en empleado)
//*1 talla de calzado puede contener muchos empleados, pero 1 empleado solo puede tener una talla de calzado
TallaCalzadoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'talla_calzado_fk' });
EmpleadoModel.belongsTo(TallaCalzadoModel, { foreignKey:'talla_calzado_fk' })

//Relacion talla_pantalon y empleado (foranea en empleado)
//*1 talla de pantalon la pueden tener muchos empleados, pero 1 solo empleado puede tener 1 sola talla de pantalon
TallaPantalonModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'talla_pantalon_fk' });
EmpleadoModel.belongsTo(TallaPantalonModel, { foreignKey:'talla_pantalon_fk' })

//Relacion talla_camisa y empleado (foranea en empleado)
//*1 talla de camisa la tienen muchos empleados, pero 1 empleado solo tiene 1 talla de camisa
TallaCamisaModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'talla_camisa_fk' });
EmpleadoModel.belongsTo(TallaCamisaModel, { foreignKey:'talla_camisa_fk' })

//Relacion estado_civil y empleado (foranea en empleado)
//*1 empleado solo puede tener 1 estado civil, pero 1 estado civil lo pueden tener muchos empleados
EstadoCivilModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'estado_civil_fk' });
EmpleadoModel.belongsTo(EstadoCivilModel, { foreignKey:'estado_civil_fk' })

//Relacion nacionalidad y empleado (foranea en empleado)
//*1 nacionalidad es participe en muchos empleados, pero 1 empleado solo puede tener 1 nacionalidad
NacionalidadModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'nacionalidad_fk' });
EmpleadoModel.belongsTo(NacionalidadModel, { foreignKey:'nacionalidad_fk' })

//Relacion cargo y empleado (foranea en empleado)
//*1 cargo tiene muchos empleados asociados, pero 1 empleado solo tiene 1 unico cargo
CargoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'cargo_fk' });
EmpleadoModel.belongsTo(CargoModel, { foreignKey:'cargo_fk' })

//Relacion caja_compensacion y empleado (foranea en empleado)
//*muchos empleados estan asociados a 1 caja de compensación familiar, pero 1 empleado solo puede estar asociado a una unica caja de compensación familiar
CajaCompensacionModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'ccf_fk' });
EmpleadoModel.belongsTo(CajaCompensacionModel, { foreignKey:'ccf_fk' })

//Relacion cesantias y empleado (foranea en empleado)
//*1 empleado puede tener una sola cesantia asociada, pero 1 cesantia puede tener muchos empleados
CesantiasModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'cesantias_fk' });
EmpleadoModel.belongsTo(CesantiasModel, { foreignKey:'cesantias_fk' })

//Relacion pension y empleado (foranea en empleado)
//*1 pension tiene asociada muchos empleados, pero 1 empleado solo tiene 1 pension asociada
PensionModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'pension_fk' });
EmpleadoModel.belongsTo(PensionModel, { foreignKey:'pension_fk' })

//Relacion arl y empleado (foranea en empleado)
//*1 empleado cuenta con 1 arl asociada, pero 1 arl tiene muchos empleados asociados 
ArlModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'arl_fk' });
EmpleadoModel.belongsTo(ArlModel, { foreignKey:'arl_fk' })

//Relacion eps y empleado (foranea en empleado)
//*1 eps tiene muchos empleados asociados, pero 1 empleado solo tiene 1 eps
EpsModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'eps_fk' });
EmpleadoModel.belongsTo(EpsModel, { foreignKey:'eps_fk' })

//Relacion banco y empleado (foranea en empleado)
//*1 Empleado cuenta con un unico banco, pero 1 banco contiene muchos empleados relacionados
BancoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'banco_fk' });
EmpleadoModel.belongsTo(BancoModel, { foreignKey:'banco_fk' })

//Relacion tipo_cuenta y empleado (foranea en empleado)
//*1 tipo de cuenta contiene muchos empleados, 1 empleado contiene 1 unico registro de tipo de cuenta
TipoCuentaModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_cuenta_fk' });
EmpleadoModel.belongsTo(TipoCuentaModel, { foreignKey:'tipo_cuenta_fk' })

//Relacion estudios_realizados y empleado (foranea en empleado)
//*1 registro de estudios realizados contiene muchos empleados relacionados, pero 1 empleado solo tiene relacionado 1 registro de estudios realizados
EstudiosRealizadosModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'estudios_fk' });
EmpleadoModel.belongsTo(EstudiosRealizadosModel, { foreignKey:'estudios_fk' })

//Relacion tipo_contrato y empleado (foranea en empleado)
//*1 tipo de contrato tiene muchos empleados relacionados, pero 1 empleado solo tiene un tipo de contrato
TipoContratoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_contrato_fk' });
EmpleadoModel.belongsTo(TipoContratoModel, { foreignKey:'tipo_contrato_fk' })

//Relacion tiempo y empleado (foranea en empleado)
//*1 registro de la tabla tiempo tiene muchos registros de la tabla empleados relacionados, pero 1 empleado solo tiene un registro de la tabla tiempo relacionados
TiempoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_tiempo_fk' });
EmpleadoModel.belongsTo(TiempoModel, { foreignKey:'tipo_tiempo_fk' })

//Relacion estado_contrato y empleado (foranea en empleado)
//*1 empleado solo tiene un registro de estado contrato, pero 1 registro de estado contrato contiene muchos empleados
EstadoContratoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'estado_contrato_fk' });
EmpleadoModel.belongsTo(EstadoContratoModel, { foreignKey:'estado_contrato_fk' })

//Relacion salario y empleado (foranea en empleado)
//*1 empleado cuenta con 1 unico salario, pero 1 salario puede tener muchos empleados a cargo
SalarioModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'salario_fk' });
EmpleadoModel.belongsTo(SalarioModel, { foreignKey:'salario_fk' })

//Relacion aux_movilidad y empleado (foranea en empleado)
//*1 auxilio de movilidad tiene muchos empleados, pero 1 empleado solo tiene 1 unico auxilio de movilidad
AuxMovilidadModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'aux_movilidad_fk' });
EmpleadoModel.belongsTo(AuxMovilidadModel, { foreignKey:'aux_movilidad_fk' })

//Relacion empresa y empleado (foranea en empleado)
//*1 empresa tiene muchos empleados, pero 1 empleado solo puede pertenecer a una unica empresa
EmpresaModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'empresa_fk' });
EmpleadoModel.belongsTo(EmpresaModel, { foreignKey:'empresa_fk' })

//Relacion empleado y jefe_directo (foranea en empleado)
//?La siguiente relacion es una relación a la misma tabla
//*1 empleado tiene 1 unico jefe directo, y 1 jefe puede tener muchos empleados
//Para esta relación estblecemos primero la foranea 
EmpleadoModel.hasMany(EmpleadoModel, { foreignKey:'jefe_directo_fk' });
//Y despues hacemos la relación del otro lado asignando un alias
EmpleadoModel.belongsTo(EmpleadoModel, { as:'jefe_directo', foreignKey:'jefe_directo_fk' })

//Relacion ciudad y empleado (foranea en empleado) => lugar Nacimiento
//*1 empleado solo puede tener 1 unica ciudad de nacimiento, 1 ciudad puede tener muchos empleados relacionados
//?El alias cambia ya que hay varias relaciones con la misma tabla
CiudadModel.hasMany(EmpleadoModel, { as:'empleado_lugar_nacimiento', foreignKey:'lugar_nacimiento_fk' });
EmpleadoModel.belongsTo(CiudadModel, { as:'lugar_nacimiento', foreignKey:'lugar_nacimiento_fk' })

//Relacion ciudad y empleado (foranea en empleado) => Lugar Expedicion doc
//*1 empleado solo puede tener 1 unica ciudad de expedición de documento, 1 ciudad puede tener muchos empleados
CiudadModel.hasMany(EmpleadoModel, { as:'empleado_lugar_exp_doc', foreignKey:'lugar_exp_doc_fk' });
EmpleadoModel.belongsTo(CiudadModel, { as:'lugar_exp_doc', foreignKey:'lugar_exp_doc_fk' })

//Relacion ciudad y empleado (foranea en empleado) => lugar trabajo
//*1 Empleado solo puede tener 1 unica ciudad donde labora, 1 ciudad puede tener varios empleados relacionados
CiudadModel.hasMany(EmpleadoModel, { as:'empleado_lugar_trabajo', foreignKey:'lugar_trabajo_fk' });
EmpleadoModel.belongsTo(CiudadModel, { as:'lugar_trabajo', foreignKey:'lugar_trabajo_fk' })

//Relacion tipo_documento y documento (foranea en documento)
//*1 tipo de documento puede tener muchos documentos relacionados, pero 1 documento solo puede tener un tipo de documento
TipoDocumentoModel.hasMany(DocumentoModel, { as:'documento', foreignKey:'tipo_documento_fk' })
DocumentoModel.belongsTo(TipoDocumentoModel, { foreignKey:'tipo_documento_fk' })

//Relacion documento y empleado (foranea en documento)
//*1 empleado puede subir 1 o mas documentos, pero 1 documento solo puede ser subido por un unico empleado
EmpleadoModel.hasMany(DocumentoModel, { as:'documento', foreignKey:'empleado_fk' })
DocumentoModel.belongsTo(EmpleadoModel, { foreignKey:'empleado_fk' })

//Relacion ciudad y centro_costo (foranea en centro costo)
//*1 centro de costo puede estar en 1 unica ciudad, pero 1 ciudad puede tener muchos centros de costo
CiudadModel.hasMany(CentroCostoModel, { as:'centro_costo', foreignKey:'id_ciudad_fk' });
CentroCostoModel.belongsTo(CiudadModel, { foreignKey:'id_ciudad_fk' })

//!-------------------------------------------------------------------------------------------------

//?Para erradicar una relacion de M:N se creo una tabla debil que sera mostrada a continuacion

//Relacion documentos_faltantes y tipo_documento (foranea en documentos_faltantes)
//*1 documento faltante solo puede tener 1 tipo de documento, y 1 unico tipo de documento puede tener muchos documentos faltantes
TipoDocumentoModel.hasMany(DocumentosFaltantesModel, { as:'documentos_faltantes', foreignKey:'id_tipo_documento_fk' });
DocumentosFaltantesModel.belongsTo(TipoDocumentoModel, { foreignKey:'id_tipo_documento_fk' })

//Relacion documentos_faltantes y empleado (foranea en documentos_faltantes)
//*1 documento faltante solo puede tener 1 empleado, pero 1 empelado puede tener muchos documentos faltantes
EmpleadoModel.hasMany(DocumentosFaltantesModel, { as:'documentos_faltantes', foreignKey:'id_empleado_fk' });
DocumentosFaltantesModel.belongsTo(EmpleadoModel, { foreignKey:'id_empleado_fk' })
