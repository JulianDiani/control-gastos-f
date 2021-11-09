export const getDataFromBackend = false;

export const usuariosFijos = [
  {
    id: 1,
    nombre: 'Juana',
    apellido: 'Molina',
    fechaNacimiento: '1971-04-21',
    edad: 50,
  },
  {
    id: 2,
    nombre: 'China',
    apellido: 'Zorrilla',
    fechaNacimiento: '1929-04-09',
    edad: 92,
  },
  {
    id: 3,
    nombre: 'Nelly',
    apellido: 'Omar',
    fechaNacimiento: '1921-11-17',
    edad: 100,
  },
  {
    id: 4,
    nombre: 'Erica',
    apellido: 'Rivas',
    fechaNacimiento: '1979-10-29',
    avatarUrl:
      'https://static.wikia.nocookie.net/logopedia/images/c/c9/RIVERNORMAL.png',
    edad: 42,
  },
];

export const usuarioPrueba = {
  id: 1,
  nombre: 'Matias',
  apellido: 'Angeli',
  email: 'matiasangeli@gmail.com',
};

export const proyectoPrueba = {
  titulo: 'Investigación del desarrollo de la saraza',
  tipo: 'Proyecto',
  organismo: 'QIDW',
  lineaFinanciamiento: 'FGH',
  año: 2020,
  unidadAcademica: 'Departamento de Saraza',
  areaTematica: 'Ciencias de la Saraza',
  subsidio: 403323.0,
  fechaInicio: '18/09/2021',
  fechaFin: '18/09/2022',
  fechaInicioGastos: '18/12/2021',
  numeroProyecto: 7567,
  numeroExpediente: '21-0408/1409',
  numeroResolucion: 'FDASD Nro 312/32',
  director: 'Dr. Agoncito',
  coDirector: 'Lic. Enciado',
  integrantes: ['persona1', 'persona2', 'persona3', 'persona4'],
  resumen: `Este proyecto tiene como objetivo la generación de un modelo de desarrollo basado en
  componentes y requisitos que tenga en cuenta la reutilización. A partir de un método
  inicial llamado COTSRE utilizado para seleccionar componentes a partir de una serie de
  requisitos y características se ha diseñado un proceso que abarca todo el ciclo de vida de
  un componente, al que llamaremos COTSRE+. Para ello se ha estudiado un proceso de
  desarrollo de componentes existente creado por Chessman y Daniels y hemos ampliado
  COTSRE a partir de él para obtener COTSRE+. COTSRE+ se ha formalizado
  utilizando la notación estándar de OMG llamada SPEM y se ha ampliado la selección
  de componentes definida en COTSRE para que además de los requisitos y
  características, puedan utilizarse los casos de uso para seleccionar componentes. Para
  automatizar este proceso de selección y catalogar los requisitos, casos de uso y
  componentes se ha desarrollado una herramienta de escritorio llamada CotsreApp. Para
  la publicación del método se ha desarrollado una web con ayuda de la herramienta EPF
  Composer de Eclipse.`,
};

export const proyectosEnCurso = [
  {
    nombre: 'The Phantom Menace',
    director: 'George Lucas',
    fechaInicio: '08-07-1999',
    porcentaje: 98,
  },
  {
    nombre: 'A New Hope',
    director: 'George Lucas',
    fechaInicio: '25-12-1977',
    porcentaje: 52,
  },
  {
    nombre: 'The Force Awakens',
    director: 'J.J. Abrahams',
    fechaInicio: '17-12-2015',
    porcentaje: 32,
  },
  {
    nombre: 'Rogue One',
    director: 'Gareth Edwards',
    fechaInicio: '15-12-2016',
    porcentaje: 47,
  },
];

export const proyectosEnHistoria = [
  {
    nombre: 'Attack of the Clones',
    director: 'George Lucas',
    fechaInicio: '16-05-2002',
    porcentaje: 100,
  },
  {
    nombre:
      'It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy',
    director: 'George Lucas',
    fechaInicio: '25-12-1977',
    porcentaje: 100,
  },
  {
    nombre: 'The Last Jedi',
    director: 'Rian Johnson',
    fechaInicio: '14-12-2017',
    porcentaje: 100,
  },
  {
    nombre: 'Solo',
    director: 'Ron Howard',
    fechaInicio: '24-05-2018',
    porcentaje: 100,
  },
];

export const presupuestoPrueba = {
  tipoPresupuesto: 'Asignacion Disponible',
  fechaInicio: '18/09/2021',
  fechaFin: '18/09/2022',
  insumos: 718000,
  bibliografia: 0,
  gastosDePublicacion: 4500,
  viajesYViaticos: 16500,
  equipamiento: 27700,
  serviciosTecnicos: 6850,
  gastosDeAdministracion: 6368,
  totalPresupuesto: 100000,
};

export const gastosPrueba = {
  tipoGasto: 'Rendiciones especificas',
  fechaInicio: '18/09/2022',
  insumos: 41569,
  bibliografia: 0,
  gastosDePublicacion: 0,
  viajesYViaticos: 183235,
  equipamiento: 19499,
  serviciosTecnicos: 0,
  gastosDeAdministracion: 0,
  totalGastos: 50,
};

export const compras = [
  {
    fecha: '2021-02-01',
    rubro: 'Rubro',
    subrubro: 'Subrubro',
    numeroCompra: '10',
    proveedor: 'Proveedor',
    monto: '1000',
    estado: 'estado',
    factura: 'factura',
  },
  {
    fecha: '2021-02-01',
    rubro: 'Rubro',
    subrubro: 'Subrubro',
    numeroCompra: '10',
    proveedor: 'Proveedor',
    monto: '2000',
    estado: 'estado',
    factura: 'factura',
  },
  {
    fecha: '2021-02-01',
    rubro: 'Rubro',
    subrubro: 'Subrubro',
    numeroCompra: '10',
    proveedor: 'Proveedor',
    monto: '3000',
    estado: 'estado',
    factura: 'factura',
  },
  {
    fecha: '2021-02-01',
    rubro: 'Rubro',
    subrubro: 'Subrubro',
    numeroCompra: '10',
    proveedor: 'Proveedor',
    monto: '4000',
    estado: 'estado',
    factura: 'factura',
  },
];

export const proveedoresRegistrados = [
  {
    nombre: 'Logística Santos',
    rubro: 'Insumos',
    telefono: '67384433',
    mail: 'dasjkd@gmail.com',
    cuit: '23-31289332-9',
  },
  {
    nombre: 'Messi Rve',
    rubro: 'Viáticos',
    telefono: '86954345',
    mail: 'jkhgjfhe@gmail.com',
    cuit: '20-34728353-4',
  },
  {
    nombre: 'Ya no se me ocurre',
    rubro: 'Bibliografía',
    telefono: '52897353',
    mail: 'fkdasjdkf@gmail.com',
    cuit: '27-23786542-9',
  },
  {
    nombre: 'Posta que no se que poner',
    rubro: 'Relleno',
    telefono: '31267323',
    mail: 'dakhf-dasji@gmail.com',
    cuit: '22-52452412-5',
  },
];
