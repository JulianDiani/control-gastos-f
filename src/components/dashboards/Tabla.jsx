import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { formatPrice } from '../../utils/validaciones';

const rubros = [
  { id: 'tipo', label: 'Tipo' },
  { id: 'insumos', label: 'Insumos' },
  { id: 'bibliografia', label: 'Bibliografia' },
  { id: 'publicaciones',label: 'Publicacion',},
  { id: 'viaticos', label: 'Viaticos' },
  { id: 'equipamiento', label: 'Equipamiento' },
  { id: 'tecnico', label: 'Servicios Tecnicos' },
  { id: 'administracion',label: 'Administración'},
  { id: 'total', label: 'Total' },
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Tabla({ presupuesto }) {
  const classes = useStyles();
  const datosAConsumir = (({
    tipo,
    insumos,
    bibliografia,
    publicaciones,
    viaticos,
    equipamiento,
    tecnico,
    administracion,
    total,
  }) => ({
    tipo,
    insumos,
    bibliografia,
    publicaciones,
    viaticos,
    equipamiento,
    tecnico,
    administracion,
    total,
  }))(presupuesto);
  
  return (
    <>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {rubros.map((column) => (
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
                <TableRow hover role="checkbox" tabIndex={-1}>
                  {Object.entries(datosAConsumir).map( (key,idx) => {
                    const clave = key[0];
                    const value = key[1];
                    return (
                      <TableCell key={idx}>
                        { clave === "tipo" ? value : formatPrice(value??0) }
                      </TableCell>
                    );
                  })}
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper> 
     </>
  );
}
