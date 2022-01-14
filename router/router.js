const router = require("express").Router();

const DefaultRouter = require('./routes/DefaultRouter')
const DefaultRouter2 = require('./routes/DefaultRouter2')

router.use('/empresa', require('./routes/EmpresaRouter'))

router.use('/empleado', require('./routes/EmpleadoRouter'))

//! Hacer Centro costo ya que este tiene ciudad

//Default Models
router.use('/tipo-identificacion', DefaultRouter('TipoIdentificacionModel', 'id_tipo_identificacion', 'nombre_tipo_identificacion'))
router.use('/tipo-identificacion', DefaultRouter('TipoIdentificacionModel', 'id_tipo_identificacion', 'nombre_tipo_identificacion'))

router.use('/ciudad', DefaultRouter('CiudadModel', 'id_ciudad', 'nombre_ciudad'))

router.use('/nacionalidad', DefaultRouter('NacionalidadModel', 'id_nacionalidad', 'nombre_nacionalidad'))

router.use('/estado-civil', DefaultRouter('EstadoCivilModel', 'id_estado_civil', 'nombre_estado_civil'))

router.use('/cargo', DefaultRouter('CargoModel', 'id_cargo', 'nombre_cargo'))

router.use('/tipo-contrato', DefaultRouter('TipoContratoModel', 'id_tipo_contrato', 'nombre_tipo_contrato'))

router.use('/tiempo', DefaultRouter('TiempoModel', 'id_tiempo', 'nombre_tiempo'))

router.use('/estudios-realizados', DefaultRouter('EstudiosRealizadosModel', 'id_estudios', 'nombre_estudios'))

router.use('/tipo-contrato', DefaultRouter('TipoContratoModel', 'id_tipo_contrato', 'nombre_tipo_contrato'))

router.use('/estado-contrato', DefaultRouter('EstadoContratoModel', 'id_estado_contrato', 'nombre_estado_contrato'))

router.use('/salario', DefaultRouter2('SalarioModel', 'id_salario', 'monto_salario'))

router.use('/aux-movilidad', DefaultRouter2('AuxMovilidadModel', 'id_aux_movilidad', 'monto_salario'))

router.use('/tipo-cuenta', DefaultRouter('TipoCuentaModel', 'id_tipo_cuenta', 'nombre_tipo_cuenta'))

router.use('/banco', DefaultRouter('BancoModel', 'id_banco', 'nombre_banco'))

router.use('/arl', DefaultRouter('ArlModel', 'id_arl', 'nombre_arl'))

router.use('/eps', DefaultRouter('EpsModel', 'id_eps', 'nombre_eps'))

router.use('/pension', DefaultRouter('PensionModel', 'id_pension', 'nombre_pension'))

router.use('/caja-compensacion', DefaultRouter('CajaCompensacionModel', 'id_caja_comp', 'nombre_caja_comp'))

router.use('/cesantias', DefaultRouter('CesantiasModel', 'id_cesantias', 'nombre_cesantias'))

router.use('/talla-camisa', DefaultRouter('TallaCamisaModel', 'id_talla_camisa', 'nombre_talla_camisa'))

router.use('/talla-pantalon', DefaultRouter('TallaPantalonModel', 'id_talla_pantalon', 'nombre_talla_pantalon'))

router.use('/talla-calzado', DefaultRouter('TallaCalzadoModel', 'id_talla_calzado', 'nombre_talla_calzado'))

module.exports = router