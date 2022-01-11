const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class EstadoCivilModel extends Model {};

EstadoCivilModel.init({

    id_estado_civil:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_estado_civil:{
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'estado_civil',
    timestamps: false,
    freezeTableName: true
});

module.exports = EstadoCivilModel