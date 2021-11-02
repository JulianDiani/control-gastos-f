import { React }from 'react';
import { Footer } from './Footer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { proyectosEnCurso } from '../constants/constants';
import { proyectosEnHistoria } from '../constants/constants';
import { proyectoPrueba } from '../constants/constants';
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'theme.palette.action.hover,'
    },
  },
}))(TableRow);

const StyledTableHead = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#5AA123'
    },
  },
}))(TableRow);

const StyledTableHeadTerminados = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#DCDCDC'
    },
  },
}))(TableRow);


export const MisProyectos = () => {
    const $ = useStyles();

    return <>
        <h2>En curso</h2>
        <TableContainer className={$.container} component={Paper}>
            <Table aria-label="customized table">
                <StyledTableHead>
                    <StyledTableCell className={ $.textColor }>Proyecto</StyledTableCell>
                    <StyledTableCell align="center" className={ $.textColor }>Director</StyledTableCell>
                    <StyledTableCell align="center" className={ $.textColor }>Fecha de Inicio</StyledTableCell>
                    <StyledTableCell align="center" className={ $.textColor }>Porcentaje</StyledTableCell>
                </StyledTableHead>
                <TableBody>
                  {/* Usando el proyecto de prueba */}
                  <StyledTableRow key={proyectoPrueba.titulo}>
                  <StyledTableCell 
                  scope="row" 
                  component={Link}
                  to={'/proyectos'}
                  >
                    {proyectoPrueba.titulo}
                  </StyledTableCell>
                  <StyledTableCell align="center">{proyectoPrueba.director}</StyledTableCell>
                  <StyledTableCell align="center">{proyectoPrueba.fechaInicio}</StyledTableCell>
                  <StyledTableCell align="center">{'50%'}</StyledTableCell>
                </StyledTableRow>

                {proyectosEnCurso.map((proyectosEnCurso) => (
                    <StyledTableRow key={proyectosEnCurso.nombre}>
                    <StyledTableCell scope="row">{proyectosEnCurso.nombre}</StyledTableCell>
                    <StyledTableCell align="center">{proyectosEnCurso.director}</StyledTableCell>
                    <StyledTableCell align="center">{proyectosEnCurso.fechaInicio}</StyledTableCell>
                    <StyledTableCell align="center">{proyectosEnCurso.porcentaje}</StyledTableCell>
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
                    <StyledTableCell className={ $.textColorHistoric }>Proyecto</StyledTableCell>
                    <StyledTableCell align="center" className={ $.textColorHistoric }>Director</StyledTableCell>
                    <StyledTableCell align="center" className={ $.textColorHistoric }>Fecha de Inicio</StyledTableCell>
                    <StyledTableCell align="center" className={ $.textColorHistoric }>Porcentaje</StyledTableCell>
                </StyledTableHeadTerminados>
                <TableBody>
                {proyectosEnHistoria.map((proyectosEnHistoria) => (
                    <StyledTableRow key={proyectosEnHistoria.nombre}>
                    <StyledTableCell scope="row" className={ $.tableCellContent }>{proyectosEnHistoria.nombre}</StyledTableCell>
                    <StyledTableCell align="center">{proyectosEnHistoria.director}</StyledTableCell>
                    <StyledTableCell align="center">{proyectosEnHistoria.fechaInicio}</StyledTableCell>
                    <StyledTableCell align="center">{proyectosEnHistoria.porcentaje}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Footer />
    </>
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: '100%',
    },
    textColor: {
      color: 'white', 
      fontWeight: 'bold'
    },
    textColorHistoric: {
      fontWeight: 'bold'
    },
    tableCellContent: {
      maxWidth: '10vw'
    }
  });
