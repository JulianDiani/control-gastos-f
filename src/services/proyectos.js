import { presupuestoPrueba } from '../constants/constants';

/*
export async function getProyecto() {
  await fetch('http://localhost:3001/api/proyectos')
  .then(response => response.json())
  .then(data => {return data});
  //Promise.resolve(proyectoPrueba);
}
*/
export async function getProyecto() {
  const url = 'http://localhost:3001/api/proyectos';
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  console.log(response);
  return response.json(); // parses JSON response into native JavaScript objects
}
export async function getPresupuesto() {
  return Promise.resolve(presupuestoPrueba);
}
