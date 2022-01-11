const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class EpsModel extends Model {};

EpsModel.init({

    id_eps:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_eps:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'eps',
    timestamps: false,
    tableName: 'eps'
});

module.exports = EpsModel