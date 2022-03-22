
const router = require("express").Router();
const multer = require("multer");
const UploadFileController = require("../../controllers/UploadFileController");
const path = require('path');

const diskstorage = multer.diskStorage(
    {
        destination: path.join(__dirname,'../../images/PerfilImages/'),
        filename:(req, file,cb)=>{
            cb(null,'SIGE_PerfilImage_userId' + req.idEmpleado + '_' + file.originalname)
        }
    }
)

const fileUpload = multer({
    storage: diskstorage
}).single('file')


router.post('/perfil-image', fileUpload, UploadFileController.uploadPerfilImage)

module.exports =  router