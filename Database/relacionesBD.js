const CiudadModel = require('./Models/CiudadModel');
const CredencialModel = require('./Models/CredencialModel');
const DocumentoModel = require('./Models/DocumentoModel');
const EmpleadoModel = require('./Models/EmpleadoModel');
const TipoDocumentoModel = require('./Models/TipoDocumentoModel');
const TipoidentificacionModel = require('./Models/TipoIdentificacionModel');
const TipoUsuarioModel = require('./Models/TipoUsuarioModel');
const CentroCostoModel = require('./Models/CentroCostoModel');
const TallaCalzadoModel = require('./Models/TallaCalzadoModel');

//Relaciones 1 a 1

//relacion empleado y credencial
EmpleadoModel.hasOne(CredencialModel, { foreignKey: 'usuario_fk' });
CredencialModel.belongsTo(EmpleadoModel, { foreignKey: 'usuario_fk' })

//Relaciones 1 a M 

//Relacion tipo_usuario y empleado (foranea en empleado)
TipoUsuarioModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'tipo_usuario_fk' });
EmpleadoModel.belongsTo(TipoUsuarioModel, { foreignKey:'tipo_usuario_fk' })

//Relacion tipo_identificacion y empleado (foranea en empleado)
TipoidentificacionModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'id_tipo_identificacion_fk' });
EmpleadoModel.belongsTo(TipoidentificacionModel, { foreignKey:'id_tipo_identificacion_fk' })

//Relacion centro_costo y empleado (foranea en empleado)
CentroCostoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'centro_costo_fk' });
EmpleadoModel.belongsTo(CentroCostoModel, { foreignKey:'centro_costo_fk' })

//Relacion talla_calzado y empleado (foranea en empleado)
TallaCalzadoModel.hasMany(EmpleadoModel, { as:'empleado', foreignKey:'talla_calzado_fk' });
EmpleadoModel.belongsTo(TallaCalzadoModel, { foreignKey:'talla_calzado_fk' })

//Relacion ciudad y empleado (foranea en empleado) => lugar Nacimiento
CiudadModel.hasMany(EmpleadoModel, { as:'empleado_lugar_nacimiento', foreignKey:'lugar_nacimiento_fk' });
EmpleadoModel.belongsTo(CiudadModel, { foreignKey:'lugar_nacimiento_fk' })

//Relacion ciudad y empleado (foranea en empleado) => Lugar Expedicion doc
CiudadModel.hasMany(EmpleadoModel, { as:'empleado_exp_doc', foreignKey:'lugar_exp_doc_fk' });
EmpleadoModel.belongsTo(CiudadModel, { foreignKey:'lugar_exp_doc_fk' })

//Relacion ciudad y empleado (foranea en empleado) => lugar trabajo
CiudadModel.hasMany(EmpleadoModel, { as:'empleado_lugar_trabajo', foreignKey:'lugar_trabajo_fk' });
EmpleadoModel.belongsTo(CiudadModel, { foreignKey:'lugar_trabajo_fk' })

//Relacion tipo_documento y documento (foranea en documento)
TipoDocumentoModel.hasMany(DocumentoModel, { as:'documento', foreignKey:'tipo_documento_fk' })
DocumentoModel.belongsTo(TipoDocumentoModel, { foreignKey:'tipo_documento_fk' })

//Relacion documento y empleado (foranea en documento)
EmpleadoModel.hasMany(DocumentoModel, { as:'documento', foreignKey:'empleado_fk' })
DocumentoModel.belongsTo(EmpleadoModel, { foreignKey:'empleado_fk' })

//Relacion ciudad y centro_costo (foranea en centro costo)
CiudadModel.hasMany(CentroCostoModel, { as:'centro_costo', foreignKey:'id_ciudad_fk' });
CentroCostoModel.belongsTo(CiudadModel, { foreignKey:'id_ciudad_fk' })