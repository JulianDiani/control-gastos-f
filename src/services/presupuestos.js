import { presupuestoPrueba, rubros } from '../constants/constants';

export function getPresupuesto() {
  return Promise.resolve(presupuestoPrueba);
}

export function getRubros() {
  return rubros;
}
