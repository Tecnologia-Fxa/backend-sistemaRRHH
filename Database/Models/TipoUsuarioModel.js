const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class TipoUsuarioModel extends Model {};

TipoUsuarioModel.init({

    id_tipo_usuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_tipo_usuario:{
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'tipo_usuario',
    timestamps: false,
    freezeTableName: true
});

module.exports = TipoUsuarioModel