import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  withStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getProyectsForAdmin } from '../../services/proyectos';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'theme.palette.action.hover,',
    },
  },
}))(TableRow);

const StyledTableHead = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      background: '#5AA123',
    },
  },
}))(TableRow);

const ProyectsList = () => {
  const $ = useStyles();

  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    async function getProyects() {
      const proyectos = await getProyectsForAdmin();
      console.log(proyectos);
      setProyects(proyectos);
    }
    getProyects();
  }, []); //only de first render

  return (
    <>
      <h1>Proyectos</h1>
      <TableContainer className={$.container} component={Paper}>
        <Table aria-label="customized table">
          <StyledTableHead>
            <StyledTableCell className={$.textColor}>Proyecto</StyledTableCell>
            <StyledTableCell align="center" className={$.textColor}>
              Director
            </StyledTableCell>
            <StyledTableCell align="center" className={$.textColor}>
              Fecha de Inicio
            </StyledTableCell>
          </StyledTableHead>
          <TableBody>
            {proyects.map((proyecto) => (
              <StyledTableRow key={proyecto.id}>
                <StyledTableCell scope="row" to={'/proyectos'}>
                  {proyecto.titulo}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {proyecto.director}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {proyecto.fechaInicio}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '95%',
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
});

export default ProyectsList;
