export async function getAllCompras() {
  const url = 'http://localhost:3001/api/compras';
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

//REVISAR ACA PORQUE EL BODY SE ENVIA VACIO.  - ESTA HARCODEADO PERO DE TODAS FORMAS LLEGA VACIO AL BACK.
export async function postCompra(body) {
  const url = 'http://localhost:3001/api/compras';
  console.log('Body Post ' + JSON.stringify(body));
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  console.log(response);
  return response; // parses JSON response into native JavaScript objects
}

/*
fecha: 'fecha',
rubro: 'rubro',
subrubro: 'DataTypes.STRING',
numeroCompra: 'DataTypes.NUMBER',
proveedor: 'DataTypes.STRING',
monto: 1200,
estado: 'DataTypes.STRING',
factura: 'DataTypes.STRING',
nombre: 'DataTypes.STRING,',
*/
