/* Tabla que almacena las inscripciones a las convocatorias para los nuevos cargos*/
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class InscripcionEmpleadoConvocatoriaModel extends Model {};

//?La explicación basica de cada campo esta explicada en otros Modelos
InscripcionEmpleadoConvocatoriaModel.init({

    id_empleado_fk:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    id_convocatoria_fk:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    fecha_inscripcion:{
        type: DataTypes.DATE,
        allowNull: false
    },

    src_hoja_de_vida:{
        type: DataTypes.STRING(250),
        allowNull: false
    },


    
},{
    sequelize,
    modelName: 'inscripcion_empleado_convocatoria',
    timestamps: false,
    freezeTableName: true
});

module.exports = InscripcionEmpleadoConvocatoriaModel