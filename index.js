const express = require('express');
const app = express();
require ('dotenv').config();

const sequelize = require('./Database/configBD');

const PORT = process.env.PORT || 3003;

require('./Database/relacionesBD')

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.listen(PORT, () =>{
    console.log(`El proyecto a sido arrancado en http://localhost:${PORT}`);

    sequelize.sync( {force: false} ).then(()=>{
        console.log('Conexion a la bd exitosa');
    }).catch(error=>{
        console.log('Error al conectar la bd: ' + error)
    });
});