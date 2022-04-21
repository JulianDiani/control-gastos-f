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
  { id: 'tipo', label: 'Tipo' },
  { id: 'insumos', label: 'Insumos' },
  { id: 'bibliografia', label: 'Bibliografia' },
  {
    id: 'gastosDePublicacion',
    label: 'Gastos De Publicacion',
  },
  { id: 'viajesYViaticos', label: 'Viajes Y Viaticos' },
  { id: 'equipamiento', label: 'Equipamiento' },
  { id: 'serviciosTecnicos', label: 'Servicios Tecnicos' },
  {
    id: 'gastosDeAdministracion',
    label: 'Gastos De Administración',
  },
  { id: 'total', label: 'Total' },
];

function totalCalculo(gastos, presupuesto) {
  var prueba = {
    tipo: 'Total disponible',
    insumos: 0,
    bibliografia: 0,
    gastosDePublicacion: 0,
    viajesYViaticos: 0,
    equipamiento: 0,
    serviciosTecnicos: 0,
    gastosDeAdministracion: 0,
    total: 0,
  };

  presupuesto.map((pre) => {
    prueba.insumos += pre.insumos;
    prueba.bibliografia += pre.bibliografia;
    prueba.gastosDePublicacion += pre.gastosDePublicacion;
    prueba.viajesYViaticos += pre.viajesYViaticos;
    prueba.equipamiento += pre.equipamiento;
    prueba.serviciosTecnicos += pre.serviciosTecnicos;
    prueba.gastosDeAdministracion += pre.gastosDeAdministracion;
    prueba.total += pre.total;
  });
  gastos.map((pre) => {
    prueba.insumos -= pre.insumos;
    prueba.bibliografia -= pre.bibliografia;
    prueba.gastosDePublicacion -= pre.gastosDePublicacion;
    prueba.viajesYViaticos -= pre.viajesYViaticos;
    prueba.equipamiento -= pre.equipamiento;
    prueba.serviciosTecnicos -= pre.serviciosTecnicos;
    prueba.gastosDeAdministracion -= pre.gastosDeAdministracion;
    prueba.total -= pre.total;
  });
  return prueba;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Tabla({ presupuesto, gastos, totalDisponible }) {
  const classes = useStyles();
  {
    presupuesto ? presupuesto : null;
  }
  {
    gastos ? gastos : null;
  }

  const rows = totalCalculo(gastos, presupuesto);

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
                  style={{ minWidth: 100 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {presupuesto.map((row) => {
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
            {gastos.map((row) => {
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
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              key={totalDisponible.code}
            >
              {Object.values(totalDisponible).map((column) => {
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
