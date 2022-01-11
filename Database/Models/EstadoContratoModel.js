const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class EstadoContratoModel extends Model {};

EstadoContratoModel.init({

    id_estado_contrato:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_estado_contrato:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'estado_contrato',
    timestamps: false,
    freezeTableName: true
});

module.exports = EstadoContratoModel