import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  TextField,
  Button,
  Divider,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import { postCompra, getGastosPorRubro } from '../services/compras.js';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { getPresupuesto, getRubros } from '../services/presupuestos.js';
import { validateField } from '../utils/validaciones';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '50vw',
    height: '80%',
    boxShadow: '0px 0px 5px 1px grey',
    padding: theme.spacing(2, 4, 3),
    top: '55%',
    left: '55%',
    transform: 'translate(-50%,-50%)',
    overflow: 'scroll',
  },
  inputs: {
    width: '100%',
    paddingBottom: '1rem',
    display: 'flex',
  },
  item: {
    paddingLeft: '1rem',
  },
  button: {
    display: 'flex',
    justifyContent: 'right',
    marginTop: '6.5rem',
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
    marginBlock: 'auto',
    margin: '1rem',
    marginTop: '1rem',
    '&:hover': {
      color: '#62B5F6',
    },
  },
  buttonList: {
    display: 'block',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  subrubro: {
    marginTop: '1.25rem',
  },
  divider: {
    //width: '40rem',
    marginLeft: '0rem',
    marginBottom: '1.5rem',
  },
}));

export default function PopUpCompras(props) {
  const $ = useStyles();

  const [rubro, setRubro] = useState('');
  const [subrubro, setSubrubro] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [proveedor, setProveedor] = useState('');
  const [monto, setMonto] = useState(0);
  const [nombre, setNombre] = useState('');
  const [disponibleRubro, setDisponibleRubro] = useState('');
  const [validateFields, setValidateFields] = useState(true); //Usar para mostrar mensaje de error.
  const canFinish = rubro && subrubro && monto && fecha && proveedor;

  useEffect(() => {
    async function fetchGastos() {
      const gastos = await getGastosPorRubro(rubro);
      const responsePresupuesto = await getPresupuesto();
      const presupuesto = responsePresupuesto;
      const dineroDisponible = calcularDineroDisponiblePorRubro(
        presupuesto,
        gastos.totalGastado,
        rubro
      );

      setDisponibleRubro(dineroDisponible);
    }
    try {
      fetchGastos();
    } catch (err) {
      console.log('ERROR FETCH GASTOS:' + err.message);
    }
  }, [rubro]); //Ver mejor practica para no pegarle tanto al back.

  const calcularDineroDisponiblePorRubro = (presupuestoTotal,gastosRubro,rubro) => rubro? presupuestoTotal[rubro.toLowerCase()] - gastosRubro : 0;
  
  const submitForm = async () => {
    props.state(false);
    let data = {
      fecha: fecha,
      rubro: rubro,
      subrubro: subrubro,
      numeroCompra: 80,
      proveedor: proveedor,
      monto: monto,
      estado: 'Comprado',
      factura: 'factura-054',
      nombre: nombre,
    };
    const res = await postCompra(data);
    props.stateNewCompra(true);
    console.log('[PopUpCompras] submitForm response: ', res);
  };

  const submitHandle = (handle, value, isNumber = false) => {
    const regex = new RegExp('/^[0-9]$/');
    if(isNumber){
      if(!regex.test(value)){
        return;
      }
    }
    handle(value);
    console.log(value);
  };
 

  const handleClose = () => {
    props.state(false);
  };
  const RubroSelected = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
      setRubro(event.target.value);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };
    
    return (
      <div>
        <Button className={classes.buttonList} onClick={handleOpen} />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Rubro</InputLabel>

          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={rubro}
            onChange={handleChange}
          >
            {getRubros().map((r, idx) => (
              <MenuItem value={r} key={idx}>
                {r}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

    );
  };

  return (
    <>
      <div className={$.modal}>
        <h2>Realizar Pedido de Compra</h2>
        <Divider />
        <div className={$.inputs}>
          <RubroSelected />
          <TextField
            label="Subrubro"
            onChange={(e) => submitHandle(setSubrubro, e.target.value)}
            onBlur={(e) => validateField("subrubro",e.target.value,setValidateFields)}
            className={$.subrubro}
          />
        </div>
        <Typography>
          Cuentas con $<b>{disponibleRubro}</b> para este rubro{' '}
        </Typography>
        <br />
        <Divider class={$.divider} />
        <div className={$.secondRow}>
          <TextField
            label="Fecha"
            onChange={(e) => submitHandle(setFecha, e.target.value)}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div className={$.cargarFactura}>
            <TextField
              label="Monto"
              onChange={(e) => submitHandle(setMonto, e.target.value, true)}
            />
            <CloudUploadIcon className={$.uploadIcon} />
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
            onChange={(e) => submitHandle(setNombre, e.target.value)}
          />
        </div>
        <div className={$.cargarFactura}>
          <TextField
            label="Proveedor"
            className={$.proveedor}
            onChange={(e) => submitHandle(setProveedor, e.target.value)}
          />
          <CloudUploadIcon className={$.uploadIcon} />
        </div>

        <div className={$.button}>
          <Button color="inherit" className={$.botones} onClick={handleClose}>
            Cancelar
          </Button>
          <Button color="primary" disabled={!canFinish} onClick={submitForm}>
            Finalizar Pedido de Compra
          </Button>
        </div>
      </div>
    </>
  );
}
