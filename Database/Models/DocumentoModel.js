const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class DocumentoModel extends Model {};

DocumentoModel.init({

    id_documento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_documento:{
        type: DataTypes.STRING(30),
        allowNull: false
    },

    src_documento:{
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },

    tipo_documento_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    empleado_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'documento',
    timestamps: false,
    freezeTableName: true
});

module.exports = DocumentoModel