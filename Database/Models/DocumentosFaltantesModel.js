const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class DocumentosFaltantesModel extends Model {};

DocumentosFaltantesModel.init({

    id_empleado_fk:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },

    id_tipo_documento_fk:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'documentos_faltantes',
    timestamps: false,
    tableName: 'documentos_faltantes'
});

module.exports = DocumentosFaltantesModel