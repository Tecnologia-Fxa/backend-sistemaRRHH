const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class EstudiosRealizadosModel extends Model {};

EstudiosRealizadosModel.init({

    id_estudios:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_estudios:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'estudios_realizados',
    timestamps: false,
    tableName: 'estudios_realizados'
});

module.exports = EstudiosRealizadosModel