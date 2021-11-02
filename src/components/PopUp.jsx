import React from 'react';
import {
  makeStyles,
  TextField,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '90rem',
    height: '50rem',
    boxShadow: '0px 0px 5px 1px grey',
    padding: theme.spacing(2, 4, 3),
    top: '55%',
    left: '55%',
    transform: 'translate(-50%,-50%)',
  },
  inputs: {
    width: '100%',
    paddingBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  item: {
    paddingLeft: '1rem',
  },
  button: {
    display: 'flex',
    position: 'fixed',
    bottom: '0',
    right: '0',
    height: '3rem',
    marginBottom: '2rem',
    marginRight: '2rem',
  },
  secondRow: {
    display: 'grid',
    width: '30%',
  },
  cargarFactura: {
    display: 'flex',
  },
  descripcion: {
    display: 'grid',
    marginTop: '1.5rem',
  },
  multiLineInput: {
    backgroundColor: '#fafafa',
    borderRadius: '5px',
    width: '90%',
  },
  proveedor: {
    marginTop: '1.5rem',
  },
}));

export default function PopUp(props) {
  const $ = useStyles();

  const submitForm = () => {
    props.state(false);
    //Enviar data al backend
  };
  const handleClose = () => {
    props.state(false);
  };
  return (
    <>
      <div className={$.modal}>
        <h2>Realizar Pedido de Compra</h2>
        <Divider />
        <div className={$.inputs}>
          <TextField label="Rubro" />
          <TextField label="Subrubro" />
        </div>
        <Typography>Cuentas con $60.000 para este rubro </Typography>
        <br />
        <Divider />
        <div className={$.secondRow}>
          <TextField label="Fecha" />
          <div className={$.cargarFactura}>
            <TextField label="Monto" />
            <Button color="primary" sx={{ minWidth: 100 }}>
              Cargar Factura
            </Button>
          </div>
        </div>
        <div className={$.descripcion}>
          <Typography variant="h5">Descripcion</Typography>
          <br />
          <TextField
            label="La compra cuenta con los siguientes objetos/servicios"
            multiline
            rows={6}
            className={$.multiLineInput}
          />
        </div>
        <div className={$.cargarFactura}>
          <TextField label="Proveedor" className={$.proveedor} />
          <Button color="primary" sx={{ minWidth: 100 }}>
            Proveedor Nuevo
          </Button>
        </div>

        <div className={$.button}>
          <Button color="primary" className={$.botones} onClick={handleClose}>
            Cancelar
          </Button>
          <Button color="primary" onClick={submitForm}>
            Finalizar Pedido de Compra
          </Button>
        </div>
      </div>
    </>
  );
}
