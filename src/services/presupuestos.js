import { presupuestoPrueba, gastosPrueba } from '../constants/constants';

export async function getPresupuesto() {
  return Promise.resolve(presupuestoPrueba);
}

export async function getGastos() {
  return Promise.resolve(gastosPrueba);
}
