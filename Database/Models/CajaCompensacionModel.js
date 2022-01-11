const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class CajaCompensacionModel extends Model {};

CajaCompensacionModel.init({

    id_caja_comp:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_caja_comp:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'caja_compensacion',
    timestamps: false,
    freezeTableName: true
});

module.exports = CajaCompensacionModel