const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class TipoidentificacionModel extends Model {};

TipoidentificacionModel.init({

    id_tipo_identificacion:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_tipo_identificacion:{
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'tipo_identificacion',
    timestamps: false,
    freezeTableName: true
});

module.exports = TipoidentificacionModel