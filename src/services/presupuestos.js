import { presupuestoPrueba, rubros } from '../constants/constants';

export async function getPresupuesto() {
  return Promise.resolve(presupuestoPrueba);
}

export function getRubros() {
  return rubros;
}
