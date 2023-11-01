import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const StyledTableHead = withStyles(() => ({
  root: {
    background: 'linear-gradient(to left , #9BC76D, #80B05C ,#5AA123)',
  },
}))(TableHead);

export default function Tabla({ gastos }) {
  const classes = useStyles();

  const TableTitles = [
    'Rubro',
    'Presupuesto',
    'Aprobados',
    'Pendientes',
    'Remanente',
  ];

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <StyledTableHead>
              <TableRow>
                {TableTitles.map((title, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    style={{
                      minWidth: 100,
                      background: 'inherit',
                      color: 'white',
                    }}
                  >
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {gastos.map((gasto, index) => (
                <TableRow key={index} align="center">
                  <TableCell align="center" style={{ minWidth: 100 }}>
                    {gasto.rubro}
                  </TableCell>
                  <TableCell align="center" style={{ minWidth: 100 }}>
                    {gasto.presupuesto.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                      minimumFractionDigits: 0,
                    })}
                  </TableCell>
                  <TableCell align="center" style={{ minWidth: 100 }}>
                    {gasto.gastosAprobados.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                      minimumFractionDigits: 0,
                    })}
                  </TableCell>
                  <TableCell align="center" style={{ minWidth: 100 }}>
                    {gasto.gastosPendientes.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                      minimumFractionDigits: 0,
                    })}
                  </TableCell>
                  <TableCell align="center" style={{ minWidth: 100 }}>
                    {gasto.remanente.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                      minimumFractionDigits: 0,
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
