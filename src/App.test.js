import '@testing-library/jest-dom';
import { presupuestoPrueba } from './constants/constants.js';
import { createProyecto, getProyectoById } from './services/proyectos.js';

const sumarCompras = (compras) => compras.reduce((a, b) => a + b, 0);

test('Presupuesto fue creado', async () => {
  const responseCreate = await createProyecto();
  const id = responseCreate.id;
  const responseGet = await getProyectoById(id);
  expect(responseGet).toBeTruthy();
});

test('Proyecto inexistente', async () => {
  const valorInexistente = 111123123213213;
  await expect(getProyectoById(valorInexistente)).rejects.toContain("Bad request");
});

test('Monto por rubros equivale al total', async () => {
  const presupuesto = presupuestoPrueba; //Ideal cambiarlo por un fetch de un proyecto del back
  const total = presupuesto.total;
  const montos = (({
    insumos,
    bibliografia,
    publicaciones,
    viaticos,
    equipamiento,
    tecnico,
    administracion
  }) => ({
    insumos,
    bibliografia,
    publicaciones,
    viaticos,
    equipamiento,
    tecnico,
    administracion
  }))(presupuesto);

  const sumaDeMontos = Object.values(montos).reduce((a, b) => a + b);
  expect(sumaDeMontos).toEqual(total);
});

test('Compra es realizada', async () => {
  const idProyecto = 123; //Poner un Id correspondiente acá
  const todasLasCompras = await getComprasByProyecto(idProyecto);
  const compra = todasLasCompras.map(compra => Number(compra.monto));
  const totalComprasAntes = sumarCompras(compra);
  const compraARealizar = { // Poner datos relevantes
    fecha: fecha,
    rubro: rubro,
    subrubro: subrubro,
    numeroCompra: 80,
    proveedor: proveedor,
    monto: monto,
    estado: 'Comprado',
    factura: 'factura-054',
    nombre: nombre,
    idProyecto: idProyecto
  };
  const response = await postCompra(compraARealizar);
  expect(totalCompras); // Fijate qué devolvemos al hacer una compra y hace un expect, basate en los anteriores, sino podés hacer otra suma de compras y ver que haya cambiado el monto.
});

test('Compras de proyecto no son mayores que presupuesto del proyecto', async () => {
  const idProyecto = 123; //Poner un Id correspondiente acá
  const todasLasCompras = await getComprasByProyecto(idProyecto);
  const proyecto = await getProyectoById(idProyecto);
  const compra = todasLasCompras.map(compra => Number(compra.monto));
  const totalCompras = sumarCompras(compra);
  const presupuesto = proyecto.subsidio;
  expect(totalCompras).toBeLessThanOrEqual(presupuesto);
});