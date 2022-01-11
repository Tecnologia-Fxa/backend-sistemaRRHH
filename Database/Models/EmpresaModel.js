const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class EmpresaModel extends Model {};

EmpresaModel.init({

    id_empresa:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_empresa:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },

    nit:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'empresa',
    timestamps: false,
    freezeTableName: true
});

module.exports = EmpresaModel