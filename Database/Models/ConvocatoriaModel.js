/* Tabla que almacena las convocatorias para nuevos cargos*/
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../configBD');

class ConvocatoriaModel extends Model {};

//?La explicación basica de cada campo esta explicada en otros Modelos
ConvocatoriaModel.init({

    id_convocatoria:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titulo:{
        type: DataTypes.STRING(150),
        allowNull: false
    },

    descripcion:{
        type: DataTypes.STRING(600),
        allowNull: false
    },

    fecha_publicacion:{
        type: DataTypes.DATE,
        allowNull: false
    },
    
    fecha_finalizacion:{
        type: DataTypes.DATE,
        allowNull: false
    },
    
    id_centro_costo_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    id_ciudad_fk:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    
},{
    sequelize,
    modelName: 'convocatoria',
    timestamps: false,
    freezeTableName: true
});

module.exports = ConvocatoriaModel