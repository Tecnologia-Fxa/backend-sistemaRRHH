const router = require("express").Router();

const checkLogin = require('../middlewares/checkTokenLog')

const DefaultRouter = require('./routes/DefaultRouter')
const DefaultRouter2 = require('./routes/DefaultRouter2')

router.use('/empresa', /* checkLogin, */require('./routes/EmpresaRouter'))

router.use('/empleado', /* checkLogin, */ require('./routes/EmpleadoRouter'))

router.use('/centro-costo', /* checkLogin, */ require('./routes/CentroCostoRouter'))

router.use('/credencial', require('./routes/CredencialesRouter'))


//*Default Models

router.use('/tipo-identificacion', /* checkLogin, */ DefaultRouter('TipoIdentificacionModel', 'id_tipo_identificacion', 'nombre_tipo_identificacion'))

router.use('/ciudad', /* checkLogin, */ DefaultRouter('CiudadModel', 'id_ciudad', 'nombre_ciudad'))

router.use('/nacionalidad', /* checkLogin, */ DefaultRouter('NacionalidadModel', 'id_nacionalidad', 'nombre_nacionalidad'))

router.use('/estado-civil', /* checkLogin, */ DefaultRouter('EstadoCivilModel', 'id_estado_civil', 'nombre_estado_civil'))

router.use('/cargo', /* checkLogin, */ DefaultRouter('CargoModel', 'id_cargo', 'nombre_cargo'))

router.use('/tipo-contrato', /* checkLogin, */ DefaultRouter('TipoContratoModel', 'id_tipo_contrato', 'nombre_tipo_contrato'))

router.use('/tiempo', /* checkLogin, */ DefaultRouter('TiempoModel', 'id_tiempo', 'nombre_tiempo'))

router.use('/estudios-realizados', /* checkLogin, */ DefaultRouter('EstudiosRealizadosModel', 'id_estudios', 'nombre_estudios'))

router.use('/tipo-contrato', /* checkLogin, */ DefaultRouter('TipoContratoModel', 'id_tipo_contrato', 'nombre_tipo_contrato'))

router.use('/estado-contrato', /* checkLogin, */ DefaultRouter('EstadoContratoModel', 'id_estado_contrato', 'nombre_estado_contrato'))

router.use('/salario', DefaultRouter2('SalarioModel', 'id_salario', 'monto_salario'))

router.use('/aux-movilidad', DefaultRouter2('AuxMovilidadModel', 'id_aux_movilidad', 'monto_salario'))

router.use('/tipo-cuenta', /* checkLogin, */ DefaultRouter('TipoCuentaModel', 'id_tipo_cuenta', 'nombre_tipo_cuenta'))

router.use('/banco', /* checkLogin, */ DefaultRouter('BancoModel', 'id_banco', 'nombre_banco'))

router.use('/arl', /* checkLogin, */ DefaultRouter('ArlModel', 'id_arl', 'nombre_arl'))

router.use('/eps', /* checkLogin, */ DefaultRouter('EpsModel', 'id_eps', 'nombre_eps'))

router.use('/pension', /* checkLogin, */ DefaultRouter('PensionModel', 'id_pension', 'nombre_pension'))

router.use('/caja-compensacion', /* checkLogin, */ DefaultRouter('CajaCompensacionModel', 'id_caja_comp', 'nombre_caja_comp'))

router.use('/cesantias', /* checkLogin, */ DefaultRouter('CesantiasModel', 'id_cesantias', 'nombre_cesantias'))

router.use('/talla-camisa', /* checkLogin, */ DefaultRouter('TallaCamisaModel', 'id_talla_camisa', 'nombre_talla_camisa'))

router.use('/talla-pantalon', /* checkLogin, */ DefaultRouter('TallaPantalonModel', 'id_talla_pantalon', 'nombre_talla_pantalon'))

router.use('/talla-calzado', /* checkLogin, */ DefaultRouter('TallaCalzadoModel', 'id_talla_calzado', 'nombre_talla_calzado'))

module.exports = router