const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class DocumentosFaltantesModel extends Model {};

DocumentosFaltantesModel.init({

    id_documentos_faltantes:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_documentos_faltantes:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'documentos_faltantes',
    timestamps: false,
    tableName: 'documentos_faltantes'
});

module.exports = DocumentosFaltantesModel