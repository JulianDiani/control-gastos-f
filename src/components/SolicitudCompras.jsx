import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

function createData(factura, id, proyecto, rubro, subRubro, remanente, monto, estado) {
  return { factura, id, proyecto, rubro, subRubro, remanente, monto, estado };
}

const rows = [
  createData(1, 1, 'Proyecto Tec', 'Equipamiento', 'PC y Notebooks', 1000000, 110000.00, 'Pendiente'),
  createData(2, 2, 'Proyecto Universidad', 'Insumos', 'Hojas', 10000, 500, 'Pendiente'),
  createData(20, 3, 'Proyecto UNAHUR', 'Equipamiento', 'Impresora', 100000, 70000, 'Pendiente'),
  createData(80, 4, 'Proyecto Innovación', 'Insumos', 'Comida', 10000, 5000, 'Pendiente'),
];

const SolicitudCompra = () => {
  const classes = useStyles();

  return (
    <div>
        <h1>Solicitud de compra</h1>
        <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Factura</TableCell>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="right">Proyecto</TableCell>
                    <TableCell align="right">Rubro</TableCell>
                    <TableCell align="right">Subrubro</TableCell>
                    <TableCell align="right">Remanente</TableCell>
                    <TableCell align="right">Monto</TableCell>
                    <TableCell align="right">Estado</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell>{row.factura}</TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.proyecto}</TableCell>
                    <TableCell align="right">{row.rubro}</TableCell>
                    <TableCell align="right">{row.subRubro}</TableCell>
                    <TableCell align="right">{row.remanente}</TableCell>
                    <TableCell align="right">{row.monto}</TableCell>
                    <TableCell align="right">{row.estado}</TableCell>
                    <TableCell align="right">
                        <ComprasModal />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </div>
  );
}

export default SolicitudCompra;