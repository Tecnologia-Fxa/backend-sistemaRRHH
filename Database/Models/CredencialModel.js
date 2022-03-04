const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class CredencialModel extends Model {};

CredencialModel.init({

    id_credencial:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_usuario:{
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    },

    contraseña:{
        type: DataTypes.STRING(150),
        allowNull: false
    },

    usuario_fk:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }

},{
    sequelize,
    modelName: 'credencial',
    timestamps: false,
    freezeTableName: true
});

module.exports = CredencialModel