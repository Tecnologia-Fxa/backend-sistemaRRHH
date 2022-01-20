const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class CargoModel extends Model {};

CargoModel.init({

    id_cargo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_cargo:{
        type: DataTypes.STRING(35),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'cargo',
    timestamps: false,
    freezeTableName: true
});

module.exports = CargoModel