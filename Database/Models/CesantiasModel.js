const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class CesantiasModel extends Model {};

CesantiasModel.init({

    id_cesantias:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_cesantias:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'cesantias',
    timestamps: false,
    tableName: 'cesantias'
});

module.exports = CesantiasModel