import {
  reformulacion,
  presupuestoPrueba,
  gastosPrueba,
  totalesPorRubro,
  contratos,
  rendEsp,
  pagoAProv,
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

export async function getContratos() {
  return Promise.resolve(contratos);
}

export async function getRendEsp() {
  return Promise.resolve(rendEsp);
}

export async function getPagoAProv() {
  return Promise.resolve(pagoAProv);
}
