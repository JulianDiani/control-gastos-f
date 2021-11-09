import {
  reformulacion,
  presupuestoPrueba,
  gastosPrueba,
  totalesPorRubro,
} from '../constants/constants';

export async function getPresupuesto() {
  return Promise.resolve(presupuestoPrueba);
}

export async function getReformulacion() {
  return Promise.resolve(reformulacion);
}

export async function getGastos() {
  return Promise.resolve(gastosPrueba);
}

export async function getTotales() {
  return Promise.resolve(totalesPorRubro);
}
