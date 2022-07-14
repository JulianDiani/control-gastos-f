import '@testing-library/jest-dom';
import { presupuestoPrueba } from './constants/constants.js';
import { getComprasByProyecto, postCompra } from './services/compras.js';
import { createProyecto, getProyectoById } from './services/proyectos.js';

const sumarCompras = (compras) => compras.reduce((a, b) => a + b, 0);

test('Proyecto fue creado', async () => {
  const proyecto = {
    titulo: 'Proyecto Testing',
    tipo: 'Testing',
    organismo: 'Testing',
    lineaFinanciamiento: 'Testing',
    año: '2021/06/01',
    unidadAcademica: 'Testing,',
    areaTematica: 'Testing',
    subsidio: 5777666,
    fechaInicio: '2021/06/01',
    fechaFin: '2022/06/01',
    numeroExpediente: 1234,
    numeroResolucion: 82171,
    director: 'Testing',
    codirector: 'Testing',
    usuario: 'Testing',
  };
  const responseCreate = await createProyecto(proyecto);
  const id = responseCreate.id;
  const responseGet = await getProyectoById(id);
  expect(responseGet).toBeTruthy();
});

test('Proyecto inexistente', async () => {
  const valorInexistente = 111123123213213;
  const response = await getProyectoById(valorInexistente);
  expect(response.length).toEqual(0);
});

test('Monto por rubros equivale al total', () => {
  const presupuesto = presupuestoPrueba; //Ideal cambiarlo por un fetch de un proyecto del back
  const total = presupuesto.total;
  const montos = (({
    insumos,
    bibliografia,
    publicaciones,
    viaticos,
    equipamiento,
    tecnico,
    administracion,
  }) => ({
    insumos,
    bibliografia,
    publicaciones,
    viaticos,
    equipamiento,
    tecnico,
    administracion,
  }))(presupuesto);

  const sumaDeMontos = Object.values(montos).reduce((a, b) => a + b);
  expect(sumaDeMontos).toEqual(total);
});

test('Compra es realizada', async () => {
  const idProyecto = 42; //Poner un Id correspondiente acá
  const todasLasCompras = await getComprasByProyecto(idProyecto);
  const compra = todasLasCompras.map((compra) => Number(compra.monto));
  const totalComprasAntes = sumarCompras(compra);
  const montoCompra = 7357;
  const compraARealizar = {
    // Poner datos relevantes
    fecha: '2019-01-31 21:00:00',
    rubro: 'insumos',
    subrubro: 'resmas',
    numeroCompra: 80,
    proveedor: 'Garbarino S.A',
    monto: montoCompra,
    estado: 'Comprado',
    factura: 'factura-059',
    nombre: 'Compra TEST',
    idProyecto: idProyecto,
  };

  await postCompra(compraARealizar);
  const todasLasComprasNuevo = await getComprasByProyecto(idProyecto);
  const compraNuevo = todasLasComprasNuevo.map((compra) =>
    Number(compra.monto)
  );
  const totalComprasNuevo = sumarCompras(compraNuevo);

  expect(totalComprasNuevo).toEqual(totalComprasAntes + montoCompra);
});

test('Compras de proyecto no son mayores que presupuesto del proyecto', async () => {
  const idProyecto = 42;
  const todasLasCompras = await getComprasByProyecto(idProyecto);
  const proyecto = await getProyectoById(idProyecto);
  const compra = todasLasCompras.map((compra) => Number(compra.monto));
  const totalCompras = sumarCompras(compra);
  const presupuesto = proyecto[0].subsidio;
  expect(totalCompras).toBeLessThanOrEqual(presupuesto);
});
