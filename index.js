//Index.js es el archivo principal del API donde ejecutamos nuestro servidor y definimos los metodos que se van a usar


//Improtamos la libreria de express que nos permitira ejecutar el servidor y hacer uso de este
const express = require('express');
//Definimos una constante que va a tener todos los metodos relacionados a nuestro servidor (todo esto lo obtiene de la libreria express) 
const app = express();


//Importamos nuestro documento de variables de entorno
//Para esto usamos una libreria que nos facilita el trabajo llamada dotenv
//El archivo donde se encuentran las variables de entorno es ".env"
require ('dotenv').config();

//Definimos una constante que tendra todas las configuraciónes de nuestra base de datos
//Como se puede observar hace referencia al archivo que esta en la carpeta database y se llama configBD 
const sequelize = require('./Database/configBD');

//Definimos el puerto donde se va a ejecutar nuestro servidor
//Tomamos el puerto desde las variables de entorno
//En caso de que no encuentre la variable de entorno el puerto por defecto es el 3003
const PORT = process.env.PORT || 3003;

//Importamos el archivo de relacionesBD que contiene todas las tablas y la relacion de estas
//Al solo poner el require con la ruta que se va a usar, Javascript ejecuta todas las lineas de ese archivo 
require('./Database/relacionesBD')

//El siguiente fragmento de codigo es necesario para poder recibir parametros por el cuerpo de la consulta
//!Estos datos deben ser tipo JSON
/**
 * *Ejemplo:
 * ? body:{
 * ?    nombre:"Pepe",
 * ?    apellidos:"Perez",
 * ?    edad:19
 * ? }
 */
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//El siguiente fragmento de codigo evita el error de cors
//El error de cors se da porque los headers bloquean el flujo de la información por seguridad
const cors = require('cors')
app.use(cors())

//Acontinuacion la sección que redirecciona cuando la busqueda sea / 
//Cuando se entra al sistema
app.use('/', require('./router/router'))

app.listen(PORT, () =>{
    console.log(`El proyecto a sido arrancado en http://localhost:${PORT}`);

    sequelize.sync( {force: false} ).then(()=>{
        console.log('Conexion a la bd exitosa');
    }).catch(error=>{
        console.log('Error al conectar la bd: ' + error)
    });
});