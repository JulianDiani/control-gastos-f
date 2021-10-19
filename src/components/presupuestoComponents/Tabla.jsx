import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getPresupuesto, getGastos } from '../../services/proyectos.js';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Asignacion Disponible', 159, 6.0, 24, 4.0),
  createData('Reformulación IR', 237, 9.0, 37, 4.3),
  createData('Reformulación ID', 262, 16.0, 24, 6.0),
  createData('Subtotal presupuesto', 305, 3.7, 67, 4.3),
  createData('Pago a proveedor', 356, 16.0, 49, 3.9),
  createData('Rendiciones especificas', 356, 16.0, 49, 3.9),
  createData('Rendiciones de caja chica', 356, 16.0, 49, 3.9),
  createData('Reintegros', 356, 16.0, 49, 3.9),
  createData('Contratos', 356, 16.0, 49, 3.9),
  createData('Gastos administrativos', 356, 16.0, 49, 3.9),
  createData('Subtotal gastos', 356, 16.0, 49, 3.9),
  createData('Saldos totales', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();
  const [presupuesto, setPresupuesto] = useState(null);
  const [gastos, setGastos] = useState(null);

  useEffect(() => {
    const fetchPrespuesto = async () => {
      const getFunctionPresupuesto = getPresupuesto;
      const getFunctionGastos = getGastos;

      try {
        const { presupuesto } = await getFunctionPresupuesto();
        const { gastos } = await getFunctionGastos();

        setPresupuesto(presupuesto);
        setGastos(gastos);
      } catch (err) {
        console.log('ERROR USE EFFECT : ' + err);
      }
    };
    fetchPrespuesto();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Presupuesto</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Insumos</TableCell>
            <TableCell align="right">Bibliografia</TableCell>
            <TableCell align="right">Viajes y viaticos</TableCell>
            <TableCell align="right">Equipamiento</TableCell>
            <TableCell align="right">Servicios tecnicos</TableCell>
            <TableCell align="right">Gastos de administracion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
