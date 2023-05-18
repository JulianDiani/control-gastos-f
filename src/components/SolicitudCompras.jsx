import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ComprasModal from './screens/ComprasModal';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(factura, id, proyecto, fecha, nombre, rubro, subRubro, proveedor, remanente, monto, estado) {
  return { factura, id, proyecto, fecha, nombre, rubro, subRubro, proveedor, remanente, monto, estado };
}

const rows = createData( 1, "fac-00001", 'Proyecto Tec', '2023-05-12', 'Lenovo 45', 'Equipamiento', 'PC y Notebooks', 'Garbarino', 1000000, 110000.00, 'Pendiente');

const SolicitudCompra = () => {
  const classes = useStyles();

  const StyledTableHead = withStyles(() => ({
    root: {
        '&:nth-of-type(odd)': {
            background: 'linear-gradient(to left , #9BC76D, #80B05C ,#5AA123)',
        },
    },
  }))(TableHead);

  const StyledTableContainer = withStyles(() => ({
    root: {
        maxWidth: '70vw',
        marginBottom: 20
    },
  }))(TableContainer);

  return (
    <div>
        <h1>Solicitud de compra</h1>
        <div>
            <StyledTableContainer component={Paper} maxWidht=''>
            <Table className={classes.table} aria-label="simple table">
                <StyledTableHead>
                <TableRow>
                    <TableCell colSpan={12} align='center'>{rows.proyecto}</TableCell>
                </TableRow>
                </StyledTableHead>
                <TableRow>
                  <TableCell>Número de compra:</TableCell>
                  <TableCell>{rows.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Factura:</TableCell>
                  <TableCell>{rows.factura}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fecha:</TableCell>
                  <TableCell>{rows.fecha}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nombre de la compra:</TableCell>
                  <TableCell>{rows.nombre}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rubro:</TableCell>
                  <TableCell>{rows.rubro}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Subrubro</TableCell>
                  <TableCell>{rows.subRubro}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Proveedor:</TableCell>
                  <TableCell>{rows.proveedor}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Monto:</TableCell>
                  <TableCell>{rows.monto}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Remanente:</TableCell>
                  <TableCell>{rows.remanente}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Estado:</TableCell>
                  <TableCell>{rows.estado}</TableCell>
                </TableRow>
                <TableBody>
                </TableBody>
            </Table>
            </StyledTableContainer>
            <ComprasModal />
        </div>
    </div>
  );
}

export default SolicitudCompra;