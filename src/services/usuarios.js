const mockUsuarios = {
  data: [
    {
      edad: 23,
      id: 1,
      nombre: 'Ramiro',
      usuario: 'admin',
      contraseña: '123456',
      fechaNacimiento: '1999-12-06',
      apellido: 'Ambrosetti',
      avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
      rol: 'admin',
      createdAt: '2023-09-14T22:52:14.376Z',
      updatedAt: '2023-09-14T22:52:14.376Z',
    },
    {
      edad: 23,
      id: 2,
      nombre: 'Otro',
      usuario: 'otro',
      contraseña: '123456',
      fechaNacimiento: '2000-05-02',
      apellido: 'Usuario',
      avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
      rol: 'otro',
      createdAt: '2023-09-14T22:52:14.376Z',
      updatedAt: '2023-09-14T22:52:14.376Z',
    },
    {
      edad: 23,
      id: 3,
      nombre: 'Otro2',
      usuario: 'otro2',
      contraseña: '123456',
      fechaNacimiento: '2000-05-02',
      apellido: 'Usuario',
      avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
      rol: 'otro',
      createdAt: '2023-09-14T22:52:14.376Z',
      updatedAt: '2023-09-14T22:52:14.376Z',
    },
  ],
};

export async function getUsuarios() {
  const url = 'http://localhost:3001/api/usuarios';
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // *no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function getUser(user) {
  const url = `http://localhost:3001/api/usuarios/searchUser/${user}`;
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // *no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function createUser(user) {
  const url = 'http://localhost:3001/api/usuarios/newUser';
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // *no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function setUserActualProject(usuario, projectId) {
  const url = 'http://localhost:3001/api/usuarios/setUserProject';
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // *no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombreUsuario: usuario,
      proyectoId: projectId,
    }), //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
