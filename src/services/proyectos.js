import { proyectoPrueba, presupuestoPrueba } from '../constants/constants';

export async function getProyecto() {
  return Promise.resolve(proyectoPrueba);
}

export async function getPresupuesto() {
  return Promise.resolve(presupuestoPrueba);
}
