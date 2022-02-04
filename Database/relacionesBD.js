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
const EmpleadoDocumentosFaltantesModel = require('./Models/EmpleadoDocumentosFaltantesModel');

//Relaciones 1 a 1

//relacion empleado y credencial
EmpleadoModel.hasOne(CredencialModel, { foreignKey: 'usuario_fk' });
CredencialModel.belongsTo(EmpleadoModel, { foreignKey: 'usuario_fk' })

//Relaciones 1 a M 

//Relacion tipo_usuario y empleado (foranea en empleado)
TipoUsuarioModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_usuario_fk' });
EmpleadoModel.belongsTo(TipoUsuarioModel, { foreignKey:'tipo_usuario_fk' })

//Relacion tipo_identificacion y empleado (foranea en empleado)
TipoidentificacionModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_identificacion_fk' });
EmpleadoModel.belongsTo(TipoidentificacionModel, { foreignKey:'tipo_identificacion_fk' })

//Relacion centro_costo y empleado (foranea en empleado)
CentroCostoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'centro_costo_fk' });
EmpleadoModel.belongsTo(CentroCostoModel, { as:'empleado',foreignKey:'centro_costo_fk' })

//Relacion talla_calzado y empleado (foranea en empleado)
TallaCalzadoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'talla_calzado_fk' });
EmpleadoModel.belongsTo(TallaCalzadoModel, { foreignKey:'talla_calzado_fk' })

//Relacion talla_pantalon y empleado (foranea en empleado)
TallaPantalonModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'talla_pantalon_fk' });
EmpleadoModel.belongsTo(TallaPantalonModel, { foreignKey:'talla_pantalon_fk' })

//Relacion talla_camisa y empleado (foranea en empleado)
TallaCamisaModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'talla_camisa_fk' });
EmpleadoModel.belongsTo(TallaCamisaModel, { foreignKey:'talla_camisa_fk' })

//Relacion estado_civil y empleado (foranea en empleado)
EstadoCivilModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'estado_civil_fk' });
EmpleadoModel.belongsTo(EstadoCivilModel, { foreignKey:'estado_civil_fk' })

//Relacion nacionalidad y empleado (foranea en empleado)
NacionalidadModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'nacionalidad_fk' });
EmpleadoModel.belongsTo(NacionalidadModel, { foreignKey:'nacionalidad_fk' })

//Relacion cargo y empleado (foranea en empleado)
CargoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'cargo_fk' });
EmpleadoModel.belongsTo(CargoModel, { foreignKey:'cargo_fk' })

//Relacion caja_compensacion y empleado (foranea en empleado)
CajaCompensacionModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'ccf_fk' });
EmpleadoModel.belongsTo(CajaCompensacionModel, { foreignKey:'ccf_fk' })

//Relacion cesantias y empleado (foranea en empleado)
CesantiasModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'cesantias_fk' });
EmpleadoModel.belongsTo(CesantiasModel, { foreignKey:'cesantias_fk' })

//Relacion pension y empleado (foranea en empleado)
PensionModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'pension_fk' });
EmpleadoModel.belongsTo(PensionModel, { foreignKey:'pension_fk' })

//Relacion arl y empleado (foranea en empleado)
ArlModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'arl_fk' });
EmpleadoModel.belongsTo(ArlModel, { foreignKey:'arl_fk' })

//Relacion eps y empleado (foranea en empleado)
EpsModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'eps_fk' });
EmpleadoModel.belongsTo(EpsModel, { foreignKey:'eps_fk' })

//Relacion banco y empleado (foranea en empleado)
BancoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'banco_fk' });
EmpleadoModel.belongsTo(BancoModel, { foreignKey:'banco_fk' })

//Relacion tipo_cuenta y empleado (foranea en empleado)
TipoCuentaModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_cuenta_fk' });
EmpleadoModel.belongsTo(TipoCuentaModel, { foreignKey:'tipo_cuenta_fk' })

//Relacion estudios_realizados y empleado (foranea en empleado)
EstudiosRealizadosModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'estudios_fk' });
EmpleadoModel.belongsTo(EstudiosRealizadosModel, { foreignKey:'estudios_fk' })

//Relacion tipo_contrato y empleado (foranea en empleado)
TipoContratoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_contrato_fk' });
EmpleadoModel.belongsTo(TipoContratoModel, { foreignKey:'tipo_contrato_fk' })

//Relacion tiempo y empleado (foranea en empleado)
TiempoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_tiempo_fk' });
EmpleadoModel.belongsTo(TiempoModel, { foreignKey:'tipo_tiempo_fk' })

//Relacion estado_contrato y empleado (foranea en empleado)
EstadoContratoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'estado_contrato_fk' });
EmpleadoModel.belongsTo(EstadoContratoModel, { foreignKey:'estado_contrato_fk' })

//Relacion salario y empleado (foranea en empleado)
SalarioModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'salario_fk' });
EmpleadoModel.belongsTo(SalarioModel, { foreignKey:'salario_fk' })

//Relacion aux_movilidad y empleado (foranea en empleado)
AuxMovilidadModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'aux_movilidad_fk' });
EmpleadoModel.belongsTo(AuxMovilidadModel, { foreignKey:'aux_movilidad_fk' })

//Relacion empresa y empleado (foranea en empleado)
EmpresaModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'empresa_fk' });
EmpleadoModel.belongsTo(EmpresaModel, { foreignKey:'empresa_fk' })

//Relacion empleado y jefe_zona (foranea en empleado)
EmpleadoModel.hasMany(EmpleadoModel, { foreignKey:'jefe_zona_fk' });
EmpleadoModel.belongsTo(EmpleadoModel, { as:'jefe_zona', foreignKey:'jefe_zona_fk' })

//Relacion ciudad y empleado (foranea en empleado) => lugar Nacimiento
CiudadModel.hasMany(EmpleadoModel, { as:'empleado_lugar_nacimiento', foreignKey:'lugar_nacimiento_fk' });
EmpleadoModel.belongsTo(CiudadModel, { as:'lugar_nacimiento', foreignKey:'lugar_nacimiento_fk' })

//Relacion ciudad y empleado (foranea en empleado) => Lugar Expedicion doc
CiudadModel.hasMany(EmpleadoModel, { as:'empleado_lugar_exp_doc', foreignKey:'lugar_exp_doc_fk' });
EmpleadoModel.belongsTo(CiudadModel, { as:'lugar_exp_doc', foreignKey:'lugar_exp_doc_fk' })

//Relacion ciudad y empleado (foranea en empleado) => lugar trabajo
CiudadModel.hasMany(EmpleadoModel, { as:'empleado_lugar_trabajo', foreignKey:'lugar_trabajo_fk' });
EmpleadoModel.belongsTo(CiudadModel, { as:'lugar_trabajo', foreignKey:'lugar_trabajo_fk' })

//Relacion tipo_documento y documento (foranea en documento)
TipoDocumentoModel.hasMany(DocumentoModel, { as:'documento', foreignKey:'tipo_documento_fk' })
DocumentoModel.belongsTo(TipoDocumentoModel, { foreignKey:'tipo_documento_fk' })

//Relacion documento y empleado (foranea en documento)
EmpleadoModel.hasMany(DocumentoModel, { as:'documento', foreignKey:'empleado_fk' })
DocumentoModel.belongsTo(EmpleadoModel, { foreignKey:'empleado_fk' })

//Relacion ciudad y centro_costo (foranea en centro costo)
CiudadModel.hasMany(CentroCostoModel, { as:'centro_costo', foreignKey:'id_ciudad_fk' });
CentroCostoModel.belongsTo(CiudadModel, { foreignKey:'id_ciudad_fk' })

//Relacion documentos_faltantes y empleado_documentosfaltantes (foranea en empleado_documentosfaltantes)
DocumentosFaltantesModel.hasMany(EmpleadoDocumentosFaltantesModel, { as:'empleado_documentosfaltantes', foreignKey:'id_documentos_faltantes_fk' });
EmpleadoDocumentosFaltantesModel.belongsTo(DocumentosFaltantesModel, { foreignKey:'id_documentos_faltantes_fk' })

//Relacion documentos_faltantes y empleado_documentosfaltantes (foranea en empleado_documentosfaltantes)
EmpleadoModel.hasMany(EmpleadoDocumentosFaltantesModel, { as:'empleado_documentosfaltantes', foreignKey:'id_empleado_fk' });
EmpleadoDocumentosFaltantesModel.belongsTo(EmpleadoModel, { foreignKey:'id_empleado_fk' })
