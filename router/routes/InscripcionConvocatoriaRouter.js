const multer = require("multer");
const InscripcionConvocatoriaController = require("../../controllers/InscripcionConvocatoriaController");
const path = require("path");

const router = require("express").Router();

//Llamamos las dependencias de multer para poder cargar el archivo en nuestro sistema
const diskstorageConvocatorias = multer.diskStorage(
    {
        destination: path.join(__dirname,'../../files'),
        filename:(req, file,cb)=>{
            cb(null,'SIGE_Convocatoria_File_userId_' + req.idEmpleado + '_convocatoriaId_' + Date.now() + '_' + file.originalname)
        }
    }
)

const fileUploadConvocatorias = multer({
    storage: diskstorageConvocatorias
}).single('file')


router.get('/listar-disponibles-activas', InscripcionConvocatoriaController.getConvocatoriasSinInscripcionEmpleado)

router.get('/listar-inscritas-activas', InscripcionConvocatoriaController.getConvocatoriasInscritoActivas)

router.get('/listar-inscritas-inactivas', InscripcionConvocatoriaController.getConvocatoriasInscritoInactivas)

router.post('/inscribir', fileUploadConvocatorias, InscripcionConvocatoriaController.inscripcionAConvocatoria)

router.delete('/eliminar-inscripcion', InscripcionConvocatoriaController.deleteInscripcionConvocatoria)

module.exports =  router