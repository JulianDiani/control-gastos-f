import { proveedoresRegistrados } from '../constants/constants';

export async function getProveedores() {
  return Promise.resolve(proveedoresRegistrados);
}
