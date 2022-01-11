const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class ArlModel extends Model {};

ArlModel.init({

    id_arl:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_arl:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'arl',
    timestamps: false,
    freezeTableName: true
});


module.exports = ArlModel