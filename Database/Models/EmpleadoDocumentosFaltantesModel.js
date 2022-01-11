const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class EmpleadoDocumentosFaltantesModel extends Model {};

EmpleadoDocumentosFaltantesModel.init({

    id_empleado_fk:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },

    id_documentos_faltantes_fk:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'empleado_documentosfaltantes',
    timestamps: false,
    tableName: 'empleado_documentosfaltantes'
});

module.exports = EmpleadoDocumentosFaltantesModel