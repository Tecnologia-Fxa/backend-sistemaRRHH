const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class PensionModel extends Model {};

PensionModel.init({

    id_pension:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_pension:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'pension',
    timestamps: false,
    freezeTableName: true
});

module.exports = PensionModel