import {
  presupuestoPrueba,
  gastosPrueba,
  rubros,
} from '../constants/constants';

export async function getPresupuesto() {
  return Promise.resolve(presupuestoPrueba);
}

export async function getGastos() {
  return Promise.resolve(gastosPrueba);
}

export function getRubros() {
  return rubros;
}
