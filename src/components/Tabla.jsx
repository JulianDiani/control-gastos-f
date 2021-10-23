import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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
    detallePresupuesto: [
      {
        tipo: 'Presupuesto inicial',
        insumos: 0,
        bibliografia: 0,
        gastosDePublicacion: 0,
        viajesYViaticos: 0,
        equipamiento: 0,
        serviciosTecnicos: 0,
        gastosDeAdministracion: 0,
        total: 2000,
      },
      {
        tipo: 'Reformulación ID',
        insumos: 2,
        bibliografia: 0,
        gastosDePublicacion: 2,
        viajesYViaticos: 2,
        equipamiento: 0,
        serviciosTecnicos: 2,
        gastosDeAdministracion: 2,
        total: 2,
      },
      {
        tipo: 'Reformulación IR',
        insumos: 1,
        bibliografia: 4,
        gastosDePublicacion: 2,
        viajesYViaticos: 2,
        equipamiento: 0,
        serviciosTecnicos: 2,
        gastosDeAdministracion: 2,
        total: 2,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.tipo}
        </TableCell>
        <TableCell align="right">{row.insumos}</TableCell>
        <TableCell align="right">{row.bibliografia}</TableCell>
        <TableCell align="right">{row.gastosDePublicacion}</TableCell>
        <TableCell align="right">{row.viajesYViaticos}</TableCell>
        <TableCell align="right">{row.equipamiento}</TableCell>
        <TableCell align="right">{row.serviciosTecnicos}</TableCell>
        <TableCell align="right">{row.gastosDeAdministracion}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Detalle
              </Typography>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Tipo</TableCell>
                    <TableCell align="right">Insumos</TableCell>
                    <TableCell align="right">Bibliografia</TableCell>
                    <TableCell align="right">GastosDePublicacion</TableCell>
                    <TableCell align="right">Viajes Y Viaticos</TableCell>
                    <TableCell align="right">Equipamiento</TableCell>
                    <TableCell align="right">Servicios Tecnicos</TableCell>
                    <TableCell align="right">
                      Gastos De Administración
                    </TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.detallePresupuesto.map((detallePresupuestoRow) => (
                    <TableRow key={detallePresupuestoRow.tipo}>
                      <TableCell component="th" scope="row">
                        {detallePresupuestoRow.tipo}
                      </TableCell>
                      <TableCell>
                        {detallePresupuestoRow.bibliografia}
                      </TableCell>
                      <TableCell align="right">
                        {detallePresupuestoRow.insumos}
                      </TableCell>
                      <TableCell align="right">
                        {detallePresupuestoRow.gastosDePublicacion}
                      </TableCell>
                      <TableCell align="right">
                        {detallePresupuestoRow.viajesYViaticos}
                      </TableCell>
                      <TableCell align="right">
                        {detallePresupuestoRow.equipamiento}
                      </TableCell>
                      <TableCell align="right">
                        {detallePresupuestoRow.serviciosTecnicos}
                      </TableCell>
                      <TableCell align="right">
                        {detallePresupuestoRow.gastosDeAdministracion}
                      </TableCell>
                      <TableCell align="right">
                        {detallePresupuestoRow.total}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  // Datos de la tabla
  row: PropTypes.shape({
    tipo: PropTypes.string.isRequired,
    insumos: PropTypes.number.isRequired,
    gastosDePublicacion: PropTypes.number.isRequired,
    bibliografia: PropTypes.number.isRequired,
    serviciosTecnicos: PropTypes.number.isRequired,
    viajesYViaticos: PropTypes.number.isRequired,
    gastosDeAdministracion: PropTypes.number.isRequired,

    // Datos de subtabla

    detallePresupuesto: PropTypes.arrayOf(
      PropTypes.shape({
        tipo: PropTypes.string.isRequired,
        insumos: PropTypes.number.isRequired,
        gastosDePublicacion: PropTypes.number.isRequired,
        bibliografia: PropTypes.number.isRequired,
        serviciosTecnicos: PropTypes.number.isRequired,
        viajesYViaticos: PropTypes.number.isRequired,
        gastosDeAdministracion: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

// Esto lo tengo que importar de una API ------------ INICIO TABLA PRINCIPAL

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

////////////////// FIN DE LA API ----------- ABAJO ESTA LA TABLA PRINCIPAL

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

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Concepto</TableCell>
            <TableCell align="right">Insumos</TableCell>
            <TableCell align="right">Bibliografia</TableCell>
            <TableCell align="right">GastosDePublicacion</TableCell>
            <TableCell align="right">Viajes Y Viaticos</TableCell>
            <TableCell align="right">Equipamiento</TableCell>
            <TableCell align="right">Servicios Tecnicos</TableCell>
            <TableCell align="right">Gastos De Administración</TableCell>
            <TableRow align="right">Total</TableRow>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.tipo} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
