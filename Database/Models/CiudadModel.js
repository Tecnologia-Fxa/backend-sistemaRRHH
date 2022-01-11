const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class CiudadModel extends Model {};

CiudadModel.init({

    id_ciudad:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_ciudad:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'ciudad',
    timestamps: false,
    freezeTableName: true
});

module.exports = CiudadModel