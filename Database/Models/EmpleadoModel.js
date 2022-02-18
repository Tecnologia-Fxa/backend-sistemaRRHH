const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class EmpleadoModel extends Model {};

EmpleadoModel.init({

    id_empleado:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    estado:{
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    },

    tipo_identificacion_fk:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

    numero_identificacion:{
        type: DataTypes.STRING(20),
        unique:true,
        allowNull:false
    },

    nombres:{
        type: DataTypes.STRING(25),
        allowNull:false
    },

    apellidos:{
        type: DataTypes.STRING(25),
        allowNull:false
    },

    genero:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    },

    fecha_nacimiento:{
        type: DataTypes.DATEONLY,
        allowNull:false
    },

    lugar_nacimiento_fk:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

    fecha_expedicion_doc:{
        type: DataTypes.DATEONLY,
        allowNull:false
    },

    lugar_exp_doc_fk:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

    nacionalidad_fk:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

    estado_civil_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    centro_costo_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    lugar_trabajo_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cargo_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    tipo_contrato_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    tipo_tiempo_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    fecha_ingreso:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    jefe_zona_fk:DataTypes.INTEGER,

    estado_contrato_fk:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

    salario_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    aux_movilidad_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    correo_electronico:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    direccion:{
        type: DataTypes.STRING(50),
        allowNull: false
    },

    telefono_fijo:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    celular:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    estudios_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    banco_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    tipo_cuenta_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    num_cuenta:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    eps_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    arl_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    riesgo:{
        type: DataTypes.FLOAT,
        allowNull: false
    },

    pension_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cesantias_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    ccf_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    contacto_emergencia:{
        type: DataTypes.STRING(30),
    },

    tel_contacto_emergencia:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    talla_camisa_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    talla_pantalon_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    talla_calzado_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    empresa_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    src_fotografia: DataTypes.STRING(100),

    tipo_usuario_fk:{
        type: DataTypes.INTEGER,
        defaultValue: 3
    },

    fecha_gen_certificado: DataTypes.DATEONLY
    
},{
    sequelize,
    modelName: 'empleado',
    timestamps: false,
    freezeTableName: true
});

module.exports = EmpleadoModel