import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  TextField,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { postCompra } from '../services/compras.js';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '75vw',
    height: '80vh',
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

export default function PopUpCompras(props) {
  const $ = useStyles();

  const [rubro, setRubro] = useState('');
  const [subrubro, setSubrubro] = useState('');
  const [fecha, setFecha] = useState('02/01/2021');
 
  const [proveedor,setProveedor] = useState('');
  const [monto,setMonto] = useState(0);
  
 
  const [nombre,setNombre] = useState('');
  //REVISAR ACA CONSUMO DE API REST - POST.
  const submitForm = async() => {
    props.state(false);
    let data = {
      fecha: fecha,
      rubro: rubro,
      subrubro: subrubro,
      numeroCompra: 80,
      proveedor: proveedor,
      monto: monto,
      estado: "Comprado",
      factura: "factura-054",
      nombre: nombre,
    };
    console.log("LA DATA  " + JSON.stringify(data) );
    console.log("LA DATA TYPE  " + typeof data);
    const res = await postCompra(data);
    console.log("response post " + JSON.stringify(res))
  };
  const submitHandle = (handle,value) => {
    handle(value);
    console.log(value);
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
          <TextField
            label="Rubro"
            onChange={(e) => submitHandle(setRubro,e.target.value)}
          />
          <TextField 
            label="Subrubro"  
            onChange={(e) => submitHandle(setSubrubro,e.target.value)}/>
        </div>
        <Typography>Cuentas con $60.000 para este rubro </Typography>
        <br />
        <Divider />
        <div className={$.secondRow}>
          <TextField 
            label="Fecha"
            onChange={(e) => submitHandle(setFecha,e.target.value)}
          /> 
          <div className={$.cargarFactura}>
            <TextField 
              label="Monto"
              onChange={(e) => submitHandle(setMonto,e.target.value)}
            />
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
            onChange={(e) => submitHandle(setNombre,e.target.value)}
          />
        </div>
        <div className={$.cargarFactura}>
          <TextField 
            label="Proveedor" 
            className={$.proveedor}
            onChange={(e) => submitHandle(setProveedor,e.target.value)}
          />
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
