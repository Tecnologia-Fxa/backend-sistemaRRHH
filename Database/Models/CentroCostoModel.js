const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class CentroCostoModel extends Model {};

CentroCostoModel.init({

    id_centro_costo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_centro_costo:{
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    },

    id_ciudad_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'centro_costo',
    timestamps: false,
    freezeTableName: true
});

module.exports = CentroCostoModel