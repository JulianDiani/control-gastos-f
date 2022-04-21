import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { getAllCompras } from '../services/compras.js';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';
import { Button, Grid, Modal } from '@material-ui/core';
import PopUpCompras from './PopUpCompras';
import { Footer } from './Footer';

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
      backgroundColor: 'theme.palette.action.hover,',
    },
  },
}))(TableRow);

const StyledTableHead = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      background: 'linear-gradient(to left , #91ED34, #80B05C ,#5AA123)'
      //backgroundColor: '#5AA123',
    },
  },
}))(TableRow);

export const Compras = (props) => {
  //Styles
  const $ = useStyles();

  //States
  const [compras, setCompras] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //API Call
  useEffect(() => {
    async function fetchCompra() {
      const getFunction = getAllCompras;
      try {
        const compras = await getFunction();
        setCompras(compras);
      } catch (err) {
        setHasError(true);
        console.log('ERROR FETCH API [compras]: ' + err);
      }
    }
    fetchCompra();
  }, [compras]);

  const loadingRendering = () => {
    return <Alert severity="info">Cargando...</Alert>;
  };
  const rendering = () => {
    return (
      <>
        <TableContainer className={$.container}>
          <Table aria-label="customized table">
            <StyledTableHead>
              <StyledTableCell className={$.textColor}>Rubro</StyledTableCell>
              <StyledTableCell align="center" className={$.textColor}>
                Subrubro
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColor}>
                Numero de compra
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColor}>
                Proveedor
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColor}>
                Monto
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColor}>
                Estado
              </StyledTableCell>
              <StyledTableCell align="center" className={$.textColor}>
                Proveedor
              </StyledTableCell>
            </StyledTableHead>
            <TableBody>
              {compras.data.map((compra) => (
                <StyledTableRow key={compra.id}>
                  <StyledTableCell scope="row">{compra.rubro}</StyledTableCell>
                  <StyledTableCell align="center">
                    {compra.subrubro}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {compra.numeroCompra}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {compra.proveedor}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    ${compra.monto}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {compra.estado}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {compra.factura}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  //MAIN Rendering
  return (
    <>
      <Grid className={$.header}>
        <h1 className={$.title}>Compras Realizadas</h1>
        <Button variant="contained" className={$.button} onClick={handleOpen}>
          Nueva Compra
        </Button>
        <Modal open={open} onClose={handleClose}>
          <PopUpCompras state={setOpen} />
        </Modal>
      </Grid>
      <Divider />
      <br />
      {compras ? rendering() : loadingRendering}
      <Footer />
    </>
  );
};
const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    height: '2rem',
    marginTop: '1.5rem',
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
