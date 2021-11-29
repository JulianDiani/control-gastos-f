import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  TextField,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { postProveedor } from '../services/proveedores.js';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
    marginTop: '0.5rem',
  },
  uploadIcon: {
    marginBlock : 'auto',
    margin: '1rem',
    marginTop: '1rem',
    '&:hover': {
      color: '#62B5F6',
    },
  }
}));

export default function PopUpProveedores(props) {
  const $ = useStyles();

  const [nombre, setNombre] = useState('');
  const [rubro, setRubro] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mail,setMail] = useState('');
  const [cuit,setCuit] = useState('');
  
  const submitForm = async() => {
    props.state(false);
    let data = {
      nombre: nombre,
      telefono: telefono,
      rubro: rubro,
      mail: mail,
      cuit: cuit,
    };
    
    const res = await postProveedor(data);
    console.log("response post " + JSON.stringify(res))
  };
  const submitHandle = (handle,value) => {
    handle(value);
    console.log(value);
  };
  const handleClose = () => {
    props.state(false);
  };

  const handleClick = (e) => {
    console.log("Click" + e);
    return;
  };
  return (
    <>
      <div className={$.modal}>
        <h2>Agregar nuevo proveedor</h2>
        <Divider />
        <div className={$.inputs}>
          <TextField
            label="Rubro"
            onChange={(e) => submitHandle(setRubro,e.target.value)}
          />
          <TextField 
            label="Nombre"  
            onChange={(e) => submitHandle(setNombre,e.target.value)}/>
        </div>
        <Divider />
        <div className={$.secondRow}>
          <TextField 
            label="telefono"
            onChange={(e) => submitHandle(setTelefono,e.target.value)}
          /> 
          <div className={$.cargarFactura}>
            <TextField 
              label="cuit"
              onChange={(e) => submitHandle(setCuit,e.target.value)}
            />
          </div>
        </div>
        <div className={$.cargarFactura}>
          <TextField 
            label="mail" 
            className={$.proveedor}
            onChange={(e) => submitHandle(setMail,e.target.value)}
          />
        </div>
        <div className={$.button}>
          <Button color="primary" className={$.botones} onClick={handleClose}>
            Cancelar
          </Button>
          <Button color="primary" onClick={submitForm}>
            Agregar Proveedor
          </Button>
        </div>
      </div>
    </>
  );
}
