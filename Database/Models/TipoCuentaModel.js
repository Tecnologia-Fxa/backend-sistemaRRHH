const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class TipoCuentaModel extends Model {};

TipoCuentaModel.init({

    id_tipo_cuenta:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_tipo_cuenta:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'tipo_cuenta',
    timestamps: false,
    freezeTableName: true
});

module.exports = TipoCuentaModel