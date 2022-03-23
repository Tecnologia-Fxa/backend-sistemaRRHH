const router = require("express").Router();

const express = require("express");
const path = require('path');
const checkLogin = require('../middlewares/checkTokenLog')

const DefaultRouter = require('./routes/DefaultRouter')
const DefaultRouter2 = require('./routes/DefaultRouter2')
const DefaultRouter3 = require('./routes/DefaultRouter3')

router.use('/empresa', checkLogin,require('./routes/EmpresaRouter'))

router.use('/empleado', checkLogin, require('./routes/EmpleadoRouter'))

router.use('/centro-costo', checkLogin, require('./routes/CentroCostoRouter'))

router.use('/credencial', require('./routes/CredencialesRouter'))

router.use('/documentos-faltantes', checkLogin, require('./routes/DocumentosFaltantesRouter'))

router.use('/jefe-directo', checkLogin, require('./routes/JefeDirectoRouter'))

router.use('/upload-file', checkLogin, require('./routes/UploadFileRouter'))

router.use('/documentos', checkLogin, require('./routes/DocumentosRouter'))

router.use('/img/perfil', express.static(path.join(__dirname,'../images/PerfilImages')));

router.use('/file/emp', express.static(path.join(__dirname,'../files')));

//*Default Models

router.use('/tipo-identificacion', checkLogin, DefaultRouter('TipoIdentificacionModel', 'id_tipo_identificacion', 'nombre_tipo_identificacion', 'tipo_identificacion'))

router.use('/ciudad', checkLogin, DefaultRouter('CiudadModel', 'id_ciudad', 'nombre_ciudad', 'ciudad', 'ciudad'))

router.use('/nacionalidad', checkLogin, DefaultRouter('NacionalidadModel', 'id_nacionalidad', 'nombre_nacionalidad', 'nacionalidad'))

router.use('/estado-civil', checkLogin, DefaultRouter('EstadoCivilModel', 'id_estado_civil', 'nombre_estado_civil', 'estado_civil'))

router.use('/cargo', checkLogin, DefaultRouter('CargoModel', 'id_cargo', 'nombre_cargo', 'cargo'))

router.use('/tipo-contrato', checkLogin, DefaultRouter('TipoContratoModel', 'id_tipo_contrato', 'nombre_tipo_contrato', 'tipo_contrato'))

router.use('/tiempo', checkLogin, DefaultRouter('TiempoModel', 'id_tiempo', 'nombre_tiempo', 'tiempo', 'tipo_tiempo'))

router.use('/estudios-realizados', checkLogin, DefaultRouter('EstudiosRealizadosModel', 'id_estudios', 'nombre_estudios', 'estudios_realizados', 'estudios'))

router.use('/tipo-contrato', checkLogin, DefaultRouter('TipoContratoModel', 'id_tipo_contrato', 'nombre_tipo_contrato', 'tipo_contrato'))

router.use('/estado-contrato', checkLogin, DefaultRouter('EstadoContratoModel', 'id_estado_contrato', 'nombre_estado_contrato', 'estado_contrato'))

router.use('/salario', DefaultRouter2('SalarioModel', 'id_salario', 'monto_salario', 'salario'))

router.use('/aux-movilidad', DefaultRouter2('AuxMovilidadModel', 'id_aux_movilidad', 'monto_aux_movilidad', 'aux_movilidad'))

router.use('/tipo-cuenta', checkLogin, DefaultRouter('TipoCuentaModel', 'id_tipo_cuenta', 'nombre_tipo_cuenta', 'tipo_cuenta'))

router.use('/banco', checkLogin, DefaultRouter('BancoModel', 'id_banco', 'nombre_banco', 'banco'))

router.use('/arl', checkLogin, DefaultRouter('ArlModel', 'id_arl', 'nombre_arl', 'arl'))

router.use('/eps', checkLogin, DefaultRouter('EpsModel', 'id_eps', 'nombre_eps', 'eps'))

router.use('/pension', checkLogin, DefaultRouter('PensionModel', 'id_pension', 'nombre_pension', 'pension'))

router.use('/caja-compensacion', checkLogin, DefaultRouter('CajaCompensacionModel', 'id_caja_comp', 'nombre_caja_comp', 'caja_compensacion', 'ccf'))

router.use('/cesantias', checkLogin, DefaultRouter('CesantiasModel', 'id_cesantias', 'nombre_cesantias', 'cesantias'))

router.use('/talla-camisa', checkLogin, DefaultRouter3('TallaCamisaModel', 'id_talla_camisa', 'nombre_talla_camisa', 'talla_camisa'))

router.use('/talla-pantalon', checkLogin, DefaultRouter3('TallaPantalonModel', 'id_talla_pantalon', 'nombre_talla_pantalon', 'talla_pantalon'))

router.use('/talla-calzado', checkLogin, DefaultRouter3('TallaCalzadoModel', 'id_talla_calzado', 'nombre_talla_calzado', 'talla_calzado'))

router.use('/tipo-documento', checkLogin, DefaultRouter('TipoDocumentoModel', 'id_tipo_documento', 'nombre_tipo_documento', 'tipo_documento'))

module.exports = router