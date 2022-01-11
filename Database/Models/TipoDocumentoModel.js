const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class TipoDocumentoModel extends Model {};

TipoDocumentoModel.init({

    id_tipo_documento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_tipo_documento:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'tipo_documento',
    timestamps: false,
    freezeTableName:true
});

module.exports = TipoDocumentoModel