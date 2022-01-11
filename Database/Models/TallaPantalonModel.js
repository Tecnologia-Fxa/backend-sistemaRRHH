const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class TallaPantalonModel extends Model {};

TallaPantalonModel.init({

    id_talla_pantalon:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_talla_pantalon:{
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'talla_pantalon',
    timestamps: false,
    freezeTableName: true
});

module.exports = TallaPantalonModel