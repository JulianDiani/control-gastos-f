import {
  proyectoPrueba,
  presupuestoPrueba,
  gastosPrueba,
} from '../constants/constants';

export async function getProyecto() {
  return Promise.resolve(proyectoPrueba);
}

export async function getPresupuesto() {
  return Promise.resolve(presupuestoPrueba);
}

export async function getGastos() {
  return Promise.resolve(gastosPrueba);
}
