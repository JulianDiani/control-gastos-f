import { React, useEffect, useState } from 'react';
import { Footer } from './Footer';
import { SelectorProyectos } from './SelectorProyectos';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { proyectosEnHistoria } from '../constants/constants';
import {
  calculateTotalExpenses,
  nivelDeEjecucion,
} from '../utils/presupuestos';
import { getPresupuesto } from '../services/presupuestos';
import { getAllCompras } from '../services/compras';
import {
  Box,
  CircularProgress,
  Typography,
  TableHead,
} from '@material-ui/core';
import { getProyecto } from '../services/proyectos';

const StyledTableCell = withStyles(() => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    backgroundColor: 'theme.palette.action.hover,',
  },
}))(TableRow);

const StyledTableHead = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      background: '#5AA123',
    },
  },
}))(TableHead);

const StyledTableHeadTerminados = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      background: '#DCDCDC',
    },
  },
}))(TableHead);

const circularProgressWithValue = (nivelEjecucion) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={nivelEjecucion} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" color="textSecondary">
          {nivelEjecucion}%
        </Typography>
      </Box>
    </Box>
  );
};

export const MisProyectos = ({ userName, handleSetProyect, idProyecto }) => {
  const $ = useStyles();
  const [proyectosEnCurso, setProyectosEnCurso] = useState([]);
  const [compras, setCompras] = useState([]);
  const [presupuesto, setPresupuesto] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const proyectos = await getProyecto(userName);
      const comprasRealizadas = await getAllCompras();
      const presupuestoProyecto = await getPresupuesto();
      if (isMounted) {
        setCompras(comprasRealizadas);
        setProyectosEnCurso(proyectos);
        setPresupuesto(presupuestoProyecto);
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calcularNivelEjecucion = (proyectoId) => {
    const comprasRealizadasEnproyecto = compras.filter(
      (compra) => compra.idProyecto == proyectoId
    );
    const gastos = calculateTotalExpenses(comprasRealizadasEnproyecto);
    const totalPresupuesto = presupuesto.total;
    const ejecucion = nivelDeEjecucion(totalPresupuesto, gastos).split(',')[0]; //Truncamiento del porcentaje.
    return ejecucion;
  };

  return (
    <>
      <SelectorProyectos
        handleSetProyect={handleSetProyect}
        proyectosEnCurso={proyectosEnCurso}
        idProyecto={idProyecto}
      />
      <h2>Proyectos en curso</h2>
      <TableContainer className={$.container} component={Paper}>
        <Table aria-label="customized table">
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableCell className={$.textColor}>
                Proyecto
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColor}>
                Director
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColor}>
                Fecha de Inicio
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColor}>
                Porcentaje
              </StyledTableCell>
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {proyectosEnCurso.map((proyecto) => (
              <StyledTableRow key={proyecto.id}>
                <StyledTableCell scope="row">{proyecto.titulo}</StyledTableCell>
                <StyledTableCell align="center">
                  {proyecto.director}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {proyecto.fechaInicio.substr(0, 10)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {circularProgressWithValue(
                    calcularNivelEjecucion(proyecto.id)
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <h2>Historia</h2>
      <TableContainer className={$.container} component={Paper}>
        <Table aria-label="customized table">
          <StyledTableHeadTerminados>
            <StyledTableRow>
              <StyledTableCell className={$.textColorHistoric}>
                Proyecto
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColorHistoric}>
                Director
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColorHistoric}>
                Fecha de Inicio
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColorHistoric}>
                Porcentaje
              </StyledTableCell>
            </StyledTableRow>
          </StyledTableHeadTerminados>
          <TableBody>
            {proyectosEnHistoria.map((proyectosEnHistoria) => (
              <StyledTableRow key={proyectosEnHistoria.nombre}>
                <StyledTableCell scope="row" className={$.tableCellContent}>
                  {proyectosEnHistoria.nombre}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {proyectosEnHistoria.director}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {proyectosEnHistoria.fechaInicio}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {circularProgressWithValue(100)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
  },
  textColorHistoric: {
    fontWeight: 'bold',
  },
  tableCellContent: {
    maxWidth: '10vw',
  },
  button: {
    height: '2rem',
    margin: '0',
  },
});
