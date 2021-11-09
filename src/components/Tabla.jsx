import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'tipo', label: 'Tipo', minWidth: 100 },
  { id: 'insumos', label: 'Insumos', minWidth: 100 },
  { id: 'bibliografia', label: 'Bibliografia', minWidth: 100 },
  {
    id: 'gastosDePublicacion',
    label: 'Gastos De Publicacion',
    minWidth: 100,
  },
  { id: 'viajesYViaticos', label: 'Viajes Y Viaticos', minWidth: 100 },
  { id: 'equipamiento', label: 'Equipamiento', minWidth: 100 },
  { id: 'serviciosTecnicos', label: 'Servicios Tecnicos', minWidth: 100 },
  {
    id: 'gastosDeAdministracion',
    label: 'Gastos De Administración',
    minWidth: 100,
  },
  { id: 'total', label: 'Total', minWidth: 100 },
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

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Tabla({ presupuesto, reformulacion, gastos, totales }) {
  const classes = useStyles();
  {
    presupuesto ? presupuesto : null;
  }
  {
    reformulacion ? reformulacion : null;
  }
  {
    gastos ? gastos : null;
  }
  {
    totales ? totales : null;
  }

  const rows = [
    createData(
      presupuesto.tipo,
      presupuesto.insumos,
      presupuesto.bibliografia,
      presupuesto.gastosDePublicacion,
      presupuesto.viajesYViaticos,
      presupuesto.equipamiento,
      presupuesto.serviciosTecnicos,
      presupuesto.gastosDeAdministracion,
      presupuesto.totalPresupuesto
    ),

    createData(
      reformulacion.tipo,
      reformulacion.insumos,
      reformulacion.bibliografia,
      reformulacion.gastosDePublicacion,
      reformulacion.viajesYViaticos,
      reformulacion.equipamiento,
      reformulacion.serviciosTecnicos,
      reformulacion.gastosDeAdministracion,
      reformulacion.total
    ),

    createData(
      gastos.tipo,
      gastos.insumos,
      gastos.bibliografia,
      gastos.gastosDePublicacion,
      gastos.viajesYViaticos,
      gastos.equipamiento,
      gastos.serviciosTecnicos,
      gastos.gastosDeAdministracion,
      gastos.totalGastos
    ),
    createData(
      totales.tipo,
      totales.insumos,
      totales.bibliografia,
      totales.gastosDePublicacion,
      totales.viajesYViaticos,
      totales.equipamiento,
      totales.serviciosTecnicos,
      totales.gastosDeAdministracion,
      totales.totalPresupuestoActual
    ),
  ];

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
            {rows.map((row) => {
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
    </Paper>
  );
}
