import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'Tipo', label: 'Tipo', minWidth: 100 },
  { id: 'Insumos', label: 'Insumos', minWidth: 100 },
  { id: 'Bibliografia', label: 'Bibliografia', minWidth: 100 },
  {
    id: 'Gastos De Publicacion',
    label: 'Gastos De Publicacion',
    minWidth: 100,
  },
  { id: 'Viajes Y Viaticos', label: 'Viajes Y Viaticos', minWidth: 100 },
  { id: 'Equipamiento', label: 'Equipamiento', minWidth: 100 },
  { id: 'Servicios Tecnicos', label: 'Servicios Tecnicos', minWidth: 100 },
  {
    id: 'Gastos De Administración',
    label: 'Gastos De Administración',
    minWidth: 100,
  },
  { id: 'Total', label: 'Total', minWidth: 100 },
];

function createData(
  tipo,
  insumos,
  bibliografia,
  gastosDePublicacion,
  viajesYViaticos,
  equipamiento,
  serviciosTecnicos,
  gastosDeAdministracion,
  total
) {
  return {
    tipo,
    insumos,
    bibliografia,
    gastosDePublicacion,
    viajesYViaticos,
    equipamiento,
    serviciosTecnicos,
    gastosDeAdministracion,
    total,
  };
}

const totalPresupuesto = {
  tipo: 'Total presupuesto',
  fechaInicio: '18/09/2021',
  fechaFin: '18/09/2022',

  insumos: 500,
  bibliografia: 0,
  gastosDePublicacion: 40,
  viajesYViaticos: 20,
  equipamiento: 200,
  serviciosTecnicos: 100,
  gastosDeAdministracion: 40,
  presupuestoTotal: 1200,
};

const totalGastos = {
  tipo: 'Gastos totales',
  fechaInicio: '18/09/2022',

  insumos: 400,
  bibliografia: 0,
  gastosDePublicacion: 0,
  viajesYViaticos: 180,
  equipamiento: 200,
  serviciosTecnicos: 0,
  gastosDeAdministracion: 0,
  gastosTotales: 780,
};

const totalesPorRubro = {
  tipo: 'Totales por rubro (P-G)',
  fechaInicio: '18/09/2022',

  insumos: 100,
  bibliografia: 0,
  gastosDePublicacion: 40,
  viajesYViaticos: 40,
  equipamiento: 0,
  serviciosTecnicos: 100,
  gastosDeAdministracion: 40,
  totalPresupuestoActual: 420,
};

const rows = [
  createData(
    'Presupuesto',
    totalPresupuesto.insumos,
    totalPresupuesto.bibliografia,
    totalPresupuesto.gastosDePublicacion,
    totalPresupuesto.viajesYViaticos,
    totalPresupuesto.equipamiento,
    totalPresupuesto.serviciosTecnicos,
    totalPresupuesto.gastosDeAdministracion,
    totalPresupuesto.presupuestoTotal
  ),
  createData(
    'Gastos',
    totalGastos.insumos,
    totalGastos.bibliografia,
    totalGastos.gastosDePublicacion,
    totalGastos.viajesYViaticos,
    totalGastos.equipamiento,
    totalGastos.serviciosTecnicos,
    totalGastos.gastosDeAdministracion,
    totalGastos.gastosTotales
  ),
  createData(
    'Total',
    totalesPorRubro.insumos,
    totalesPorRubro.bibliografia,
    totalesPorRubro.gastosDePublicacion,
    totalesPorRubro.viajesYViaticos,
    totalesPorRubro.equipamiento,
    totalesPorRubro.serviciosTecnicos,
    totalesPorRubro.gastosDeAdministracion,
    totalesPorRubro.totalPresupuestoActual
  ),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
