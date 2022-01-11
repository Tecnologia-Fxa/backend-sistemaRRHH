const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class TallaCalzadoModel extends Model {};

TallaCalzadoModel.init({

    id_talla_calzado:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_talla_calzado:{
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'talla_calzado',
    timestamps: false,
    freezeTableName: true
});

module.exports = TallaCalzadoModel